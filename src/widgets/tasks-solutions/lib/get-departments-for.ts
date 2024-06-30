import { GetTasksDTO } from '@/shared/api/get-tasks'

export const getDepartmentsFor = (tasksDTO: GetTasksDTO): string[] => {
  const { Who } = tasksDTO
  return Object.keys(Who)
}
