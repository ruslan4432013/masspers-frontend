'use client'
import { Button } from '@/shared/ui/button'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { useEffect } from 'react'

const variantFor = (isActive: boolean) => {
  if (isActive) {
    return 'primary'
  }
  return 'secondary'
}

type Props = {
  departments: string[]
}

const DEPARTMENT_KEY = 'department'

export const SelectButtons = (props: Props) => {
  const { departments } = props

  const params = useCustomSearchParams()
  const queryValue = params.get(DEPARTMENT_KEY)

  const handleChange = (newValue: string) => () => {
    params.set(DEPARTMENT_KEY, newValue)
  }

  useEffect(() => {
    if (!queryValue && departments[0]) {
      handleChange(departments[0])()
    }
  }, [queryValue, departments.join(',')])

  return (
    <div className="flex flex-col items-center justify-center w-full gap-[8px] mt-[40px] md:flex-row md:items-start md:mt-0 xl:items-end xl:justify-start">
      {departments.map((departament) => (
        <Button
          key={departament}
          className="w-full md:w-fit"
          variant={variantFor(queryValue === departament)}
          onClick={handleChange(departament)}
        >
          {departament}
        </Button>
      ))}
    </div>
  )
}
