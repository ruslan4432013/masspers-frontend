import { Button } from '@/shared/ui/button'
import { SelectButtons } from './select-buttons'
import { getTasks } from '@/shared/api/get-tasks'
import { getDepartmentsFor } from '../lib/get-departments-for'
import { SolveSelectorWrapper } from '@/widgets/task-solvers/ui/solve-selector-wrapper'
import { SolveItems } from '@/widgets/task-solvers/ui/solve-items'
import { Suspense } from 'react'

export const TaskSolvers = async () => {
  const tasks = await getTasks()
  const departments = getDepartmentsFor(tasks)
  return (
    <div className="flex flex-col items-center justify-center w-full px-[10px] md:items-start md:px-[20px] xl:container">
      <div className="md:flex md:gap-[50px] md:justify-start xl:justify-end gap-[89px]">
        <h4 className="uppercase text-4xl text-primary-500 text-center md:text-start xl:text-[53px] xl:leading-[130%] xl:min-w-[572px] font-normal">
          Какие задачи вы решите с MassPers?
        </h4>
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
