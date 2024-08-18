import { Button } from '@/shared/ui/button'
import s from './select-buttons.module.scss'
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
  setCurrentDepartment: (newDepartment: keyof TasksType) => void
}

export const SelectButtons = (props: Props) => {
  const { departments, currentDepartment, setCurrentDepartment } = props

  const handleChange = (newValue: string) => () => {
    setCurrentDepartment(newValue as keyof TasksType)
  }

  return (
    <div className={s.select_buttons}>
      {departments.map((department) => (
        <Button
          key={department}
          className={s.select_buttons__button}
          variant={variantFor(currentDepartment === department)}
          onClick={handleChange(department)}
        >
          {tasksData[department as keyof TasksType].title}
        </Button>
      ))}
    </div>
  )
}
