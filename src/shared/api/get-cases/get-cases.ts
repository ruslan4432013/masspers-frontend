import { BASE_URL } from '../../config/base-url'
import { GetCasesDTO } from './get-cases.dto'

export const getCases = async (): Promise<GetCasesDTO> => {
  const res = await fetch(`${BASE_URL}/get_cases.php`, {
    next: { revalidate: 5 },
  })
  return await res.json()
}
