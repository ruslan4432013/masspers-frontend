'use client'
import { GetTasksDTO } from '@/shared/api/get-tasks'
import { SolveItem } from './solve-item'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { DEPARTMENT_KEY, SOLVE_KEY } from '@/entities/tasks'

type Props = {
  tasksDTO: GetTasksDTO
}

type SolveOptions = {
  department: string
  solve: string
  tasksDTO: GetTasksDTO
}

const solvesFor = ({ solve, department, tasksDTO }: SolveOptions) => {
  const { Who } = tasksDTO
  const currDepartment = Who[department]
  const currSolve = currDepartment[solve]
  return Object.values(currSolve?.Tasks || {})
}

export const SolveItems = ({ tasksDTO }: Props) => {
  const params = useCustomSearchParams()
  const solve = params.get(SOLVE_KEY)
  const department = params.get(DEPARTMENT_KEY)
  if (!department || !solve) {
    return <div />
  }

  const solveItems = solvesFor({ solve, department, tasksDTO })
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:w-full md:justify-items-center gap-10 md:gap-y-[92px] xl:grid-cols-4">
      {solveItems.map((item) => (
        <SolveItem
          key={item.icon + item.descript}
          text={item.descript}
          image={item.icon}
        />
      ))}
    </div>
  )
}
