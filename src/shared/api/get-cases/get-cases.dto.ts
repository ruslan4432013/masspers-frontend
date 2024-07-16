export type GetCasesDTO = Record<string, GroupCaseDTO>

type GroupCaseDTO = Record<string, CaseDTO>

export type CaseDTO = {
  Descript: string
  Period: string
  Video: string
  Video_link: string
  Capture: string
  Task: string
  Decision: string
  Metric: string
  Execution: string
  Result: string
  Parametr_1: string
  Parametr_2: string
  Image_2: string
  Parametr_3: string
  Image_3: string
}
