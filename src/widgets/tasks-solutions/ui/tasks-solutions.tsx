import { Button } from '@/shared/ui/button'
import { SelectButtons } from './select-buttons'
import { getTasks } from '@/shared/api/get-tasks'
import { getDepartmentsFor } from '../lib/get-departments-for'
import { Suspense } from 'react'
import s from './tasks-solutions.module.scss'
import { SolutionItems } from '@/widgets/tasks-solutions/ui/solution-items'
import { SolutionSelectorWrapper } from '@/widgets/tasks-solutions/ui/solution-selector-wrapper'

export const TasksSolutions = async () => {
  let tasks
  try {
    tasks = await getTasks()
  } catch (e) {
    return <div>Server Error...</div>
  }
  const departments = getDepartmentsFor(tasks)
  return (
    <div className={s.tasks_solutions}>
      <div className={s.tasks_solutions__point_title}>
        <h3 className={s.tasks_solutions__point}>Задачи</h3>
        <h4 className={s.tasks_solutions__title}>
          Какие задачи вы решите с MassPers?
        </h4>
      </div>

      <div className={s.tasks_solutions__contant}>
        <div className={s.tasks_solutions__select_buttons_container}>
          <Suspense>
            <SelectButtons departments={departments} />
          </Suspense>
        </div>

        <div className={s.tasks_solutions__solution_selector_container}>
          <Suspense>
            <SolutionSelectorWrapper
              tasksDTO={tasks}
              className={s.tasks_solutions__solution_selector_wrapper}
            />
          </Suspense>
        </div>

        <div className={s.tasks_solutions__solution_items_container}>
          <Suspense>
            <SolutionItems tasksDTO={tasks} />
          </Suspense>
          <Button className={s.tasks_solutions__solution_items__button}>
            Подробнее об удержании в продажах
          </Button>
        </div>
      </div>
    </div>
  )
}
