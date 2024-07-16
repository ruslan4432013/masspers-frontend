'use client'
import { IssueSolution } from '@/entities/issue-solution'
import s from './issue-solution-list.module.scss'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { DEPARTMENT_KEY, SOLVE_KEY } from '@/entities/tasks'
import { GetTasksDTO } from '@/shared/api/get-tasks'

type Props = {
  tasksDTO: GetTasksDTO
}

export const IssueSolutionList = ({ tasksDTO }: Props) => {
  const queryParams = useCustomSearchParams()
  const solveValue = queryParams.get(SOLVE_KEY)
  const departmentValue = queryParams.get(DEPARTMENT_KEY)

  if (!solveValue || !departmentValue) {
    return null
  }

  const pains = tasksDTO.Who?.[departmentValue]?.[solveValue]?.Pains

  if (!pains) {
    return null
  }

  const painsDTO = Object.values(pains)

  return (
    <div className={s.issue_solution_list}>
      <div className={s.issue_solution_list__wrapper}>
        <div className={s.issue_solution_list__point_title}>
          <h3 className={s.issue_solution_list__point}>Проблемы и решение</h3>
          <h4 className={s.issue_solution_list__title}>
            Какие боли снимает MassPers и как?
          </h4>
        </div>

        <div className={s.issue_solution_list__inner__container}>
          <div className={s.issue_solution_list__only_xl}>
            <span className={s.issue_solution_list__only_xl__text}>Боли</span>
            <span className={s.issue_solution_list__only_xl__text}>
              Решение
            </span>
          </div>
          {painsDTO.map(({ Pain, Decision }, index) => (
            <IssueSolution key={index} issue={Pain} solution={Decision} />
          ))}
        </div>
      </div>
    </div>
  )
}
