import { Button } from '@/shared/ui/button'
import { SelectButtons } from './select-buttons'
import { Suspense } from 'react'
import s from './tasks-solutions.module.scss'
import { SolutionItems } from '@/widgets/tasks-solutions/ui/solution-items'
import { SolutionSelectorWrapper } from '@/widgets/tasks-solutions/ui/solution-selector-wrapper'
import { TaskType } from '@/shared/data/tasks'

type Props = {
  departments: string[]
  goals: string[]
  currentDepartment: string
  setCurrentDepartment: (newDepartment: string) => void
  currentGoals: string
  setCurrentGoals: (option: string) => void
  currentTasks: TaskType[]
}

export const TasksSolutions = (props: Props) => {
  const {
    departments,
    goals,
    currentDepartment,
    setCurrentDepartment,
    currentGoals,
    setCurrentGoals,
    currentTasks,
  } = props

  return (
    <div className={s.tasks_solutions}>
      <div className={s.tasks_solutions__point_title}>
        <h3 className={s.tasks_solutions__point}>Задачи</h3>
        <h4 className={s.tasks_solutions__title}>
          Какие задачи вы решите с MassPers?
        </h4>
      </div>

      <div className={s.tasks_solutions__content}>
        <div className={s.tasks_solutions__select_buttons_container}>
          <Suspense>
            <SelectButtons
              departments={departments}
              currentDepartment={currentDepartment}
              setCurrentDepartment={setCurrentDepartment}
            />
          </Suspense>
        </div>

        <div className={s.tasks_solutions__solution_selector_container}>
          <Suspense>
            <SolutionSelectorWrapper
              goals={goals}
              currentDepartment={currentDepartment}
              currentGoals={currentGoals}
              setCurrentGoals={setCurrentGoals}
              className={s.tasks_solutions__solution_selector_wrapper}
            />
          </Suspense>
        </div>

        <div className={s.tasks_solutions__solution_items_container}>
          <Suspense>
            <SolutionItems tasks={currentTasks} />
          </Suspense>
          <Button className={s.tasks_solutions__solution_items__button}>
            Подробнее об удержании в продажах
          </Button>
        </div>
      </div>
    </div>
  )
}
