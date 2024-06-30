'use client'
import { GetTasksDTO } from '@/shared/api/get-tasks'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { DEPARTMENT_KEY } from '@/entities/tasks'
import { SelectSolveType } from '@/features/select-solve-type'

type Props = {
  tasksDTO: GetTasksDTO
  justifyStart?: boolean
}

const optionsFor = (department: string, tasksDTO: GetTasksDTO) => {
  const { Who } = tasksDTO
  return Object.keys(Who[department])
}

export const SolutionSelectorWrapper = (props: Props) => {
  const { tasksDTO, justifyStart } = props
  const params = useCustomSearchParams()
  const departament = params.get(DEPARTMENT_KEY)
  if (!departament) {
    return <div />
  }

  const options = optionsFor(departament, tasksDTO)
  return <SelectSolveType options={options} justifyStart={justifyStart} />
}
