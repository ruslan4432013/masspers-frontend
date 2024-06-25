import { BASE_URL } from '../../config/base-url'
import { GetTasksDTO } from '@/shared/api/get-tasks/get-tasks.dto'

export const getTasks = async (): Promise<GetTasksDTO> => {
  const res = await fetch(`${BASE_URL}/get_tasks.php`, {
    next: { revalidate: 5 },
  })
  return await res.json()
}
