import { Button } from '@/shared/ui/button'
import { SelectButtons } from './select-buttons'
import { getTasks } from '@/shared/api/get-tasks'
import { getDepartmentsFor } from '../lib/get-departments-for'
import { SolveSelectorWrapper } from '@/widgets/task-solvers/ui/solve-selector-wrapper'
import { SolveItems } from '@/widgets/task-solvers/ui/solve-items'
import { Suspense } from 'react'

export const TaskSolvers = async () => {
  let tasks
  try {
    tasks = await getTasks()
  } catch (e) {
    return <div>Server Error...</div>
  }
  const departments = getDepartmentsFor(tasks)
  return (
    <div className="flex flex-col items-center justify-center w-full px-[10px] md:items-start md:px-[20px] xl:container">
      <div className="md:flex md:gap-[50px] md:justify-start xl:justify-end gap-[89px]">
        <Suspense>
          <SelectButtons departments={departments} />
        </Suspense>
      </div>
      <div className="mt-[39px] w-full">
        <Suspense>
          <SolveSelectorWrapper tasksDTO={tasks} />
        </Suspense>
      </div>

      <div className="border border-primary-500 px-[10px] pt-[65px] pb-[48px] flex flex-col items-center justify-center gap-[30px] rounded-[10px] mt-[31px] md:mt-0 md:gap-[40px] md:w-full">
        <Suspense>
          <SolveItems tasksDTO={tasks} />
        </Suspense>
        <Button className="w-full uppercase md:w-auto">
          Подробнее об удержании в продажах
        </Button>
      </div>
    </div>
  )
}
