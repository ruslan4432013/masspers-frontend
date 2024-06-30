import s from './issue-solution.module.scss'

type Props = {
  issue: string
  solution: string
}

export const IssueSolution = (props: Props) => {
  const { issue, solution } = props
  return (
    <div className={s.issue_solution}>
      <span className={s.issue_solution__issue}>{issue}</span>
      <span className={s.issue_solution__solution}>{solution}</span>
    </div>
  )
}
