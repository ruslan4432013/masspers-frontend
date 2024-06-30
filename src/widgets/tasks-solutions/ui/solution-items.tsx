'use client'
import { GetTasksDTO } from '@/shared/api/get-tasks'
import { SolutionItem } from './solution-item'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { DEPARTMENT_KEY, SOLVE_KEY } from '@/entities/tasks'
import s from './solution-items.module.scss'

type Props = {
  tasksDTO: GetTasksDTO
}

type SolutionOptions = {
  department: string
  solve: string
  tasksDTO: GetTasksDTO
}

const solvesFor = ({
  solve: solution,
  department,
  tasksDTO,
}: SolutionOptions) => {
  const { Who } = tasksDTO
  const currDepartment = Who[department]
  const currSolve = currDepartment[solution]
  return Object.values(currSolve?.Tasks || {})
}

export const SolutionItems = ({ tasksDTO }: Props) => {
  const params = useCustomSearchParams()
  const solve = params.get(SOLVE_KEY)
  const department = params.get(DEPARTMENT_KEY)
  if (!department || !solve) {
    return <div />
  }

  const solutionItems = solvesFor({ solve, department, tasksDTO })
  return (
    <div className={s.solution_items}>
      {solutionItems.map((item) => (
        <SolutionItem
          key={item.icon + item.descript}
          text={item.descript}
          image={item.icon}
        />
      ))}
    </div>
  )
}
