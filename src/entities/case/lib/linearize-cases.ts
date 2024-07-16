import { CaseDTO, GetCasesDTO } from '@/shared/api/get-cases'

export const linearizeCases = (cases: GetCasesDTO | null) => {
  if (!cases) {
    return null
  }
  const result: CaseDTO[] = Object.values(cases).flatMap((el) =>
    Object.values(el)
  )
  return result
}
