import s from './colleagues-overview.module.scss'
import cn from 'classnames'

type Props = {
  className?: string
}

export const ColleaguesOverview = ({ className }: Props) => {
  return (
    <div className={cn(s.colleagues_overview, className)}>
      <h3 className={s.colleagues_overview__point}>Мы</h3>
      <h4 className={s.colleagues_overview__title}>Наша команда</h4>
      <div className={s.colleagues_overview__text}>
        <p>Наш коллектив - настоящая гордость нашей компании.</p>
        <p>
          Он состоит из высококвалифицированных профессионалов, которые тесно
          сотрудничают и воплощают в жизнь самые сложные и амбициозные проекты.
        </p>
      </div>
    </div>
  )
}
