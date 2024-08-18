'use client'

import { IssueSolution } from '@/entities/issue-solution'
import s from './issue-solution-list.module.scss'
import { IssueSolutionType } from '@/shared/data/tasks'

type Props = {
  issueSolution: IssueSolutionType[]
}

export const IssueSolutionList = ({ issueSolution }: Props) => {
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
          {issueSolution.map(({ issue, solution }, index) => (
            <IssueSolution key={index} issue={issue} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  )
}
