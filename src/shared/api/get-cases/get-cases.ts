import { GetCasesDTO } from './get-cases.dto'
import { headers } from 'next/headers'
import { HREF_HEADER_KEY } from '@/shared/config/keys'

export const getCases = async (): Promise<GetCasesDTO | null> => {
  const headerList = headers()
  const href = headerList.get(HREF_HEADER_KEY)
  if (!href) {
    return null
  }
  const url = new URL(href)
  const BASE_URL = url.protocol + '//' + url.host
  const response = await fetch(`${BASE_URL}/api/cases`)
  return response.json()
}
