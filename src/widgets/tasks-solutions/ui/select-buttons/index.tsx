'use client'
import { Button } from '@/shared/ui/button'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { useEffect } from 'react'
import s from './select-buttons.module.scss'

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
      handleChange(departments[0])
    }
  }, [])

  return (
    <div className={s.select_buttons}>
      {departments.map((departament) => (
        <Button
          key={departament}
          className={s.select_buttons__button}
          variant={variantFor(queryValue === departament)}
          onClick={handleChange(departament)}
        >
          {departament}
        </Button>
      ))}
    </div>
  )
}
