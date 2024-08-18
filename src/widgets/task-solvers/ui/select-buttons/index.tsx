'use client'

import { Button } from '@/shared/ui/button'
import { tasksData, TasksType } from '@/shared/data/tasks'

const variantFor = (isActive: boolean) => {
  if (isActive) {
    return 'primary'
  }
  return 'secondary'
}

type Props = {
  departments: string[]
  currentDepartment: string
  setCurrentDepartment: (department: string) => void
}

export const SelectButtons = (props: Props) => {
  const { departments, currentDepartment, setCurrentDepartment } = props

  const handleChange = (newValue: string) => () => {
    setCurrentDepartment(newValue)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-[8px] mt-[40px] md:flex-row md:items-start md:mt-0 xl:items-end xl:justify-start">
      {departments.map((departament) => (
        <Button
          key={departament}
          className="w-full md:w-fit"
          variant={variantFor(currentDepartment === departament)}
          onClick={handleChange(departament)}
        >
          {tasksData[departament as keyof TasksType].title}
        </Button>
      ))}
    </div>
  )
}
