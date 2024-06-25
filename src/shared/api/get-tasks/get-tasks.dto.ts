export type GetTasksDTO = {
  Who: DepartmentsDTO
}

type DepartmentsDTO = Record<string, DepartamentDTO>
type DepartamentDTO = Record<string, CompanyTaskDTO>

type ValuesDTO = Record<`Value_${number}`, ItemDTO>
type TasksDTO = Record<`Task_${number}`, ItemDTO>
type PainsDTO = Record<`Pain_${number}`, PainDTO>

type CompanyTaskDTO = {
  Tasks: TasksDTO
  Pains: PainsDTO
  Values: ValuesDTO
}

type ItemDTO = {
  descript: string
  icon: string
}

type PainDTO = {
  Pain: string
  Decision: string
}
