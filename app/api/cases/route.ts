import { $fetch } from '@/shared/api/$fetch'
import { BASE_URL } from '@/shared/config/base-url'

const URL = `${BASE_URL}/admin/cases/json/tasks.json`

export async function GET() {
  const response = await $fetch(URL)
  const data = await response.json()
  return Response.json(data)
}
