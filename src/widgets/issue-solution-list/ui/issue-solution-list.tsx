import { IssueSolution } from '@/entities/issue-solution'
import s from './issue-solution-list.module.scss'
import cn from 'classnames'

const list = [
  {
    issue:
      'Текстовая рассылка не читается или воспринимается клиентами, как робототизированная, а значит не серьезная',
    solution:
      'Само по себе видеосообщение от ТОП-менеджмента компании - продавца является новым и интересным для клиента маркетинговым инструментом. А видео-сообщение обращенное лично к адресату производит эффект наивысшей формы клиентского сервиса, а значит повышает лояльность к бренду',
  },
  {
    issue:
      'Оповещать или поздравлять клиентов лично звонком очень трудозатратно',
    solution:
      'Персональные видео генерируются программным обеспечением MassPers автоматически при помощи CRM и заготовленных шаблонов в течение 2-х минут. За день можно отправить более 1000 сообщений',
  },
  {
    issue:
      'Продавцы по разным причинам не предлагают клиентам сопутствующие продукты',
    solution:
      'Настройка автоматической отправки персонального видео-сообщения новому клиенту исключит риск бездействия продавца и позволит провести продающую презентацию дополнительных продуктов',
  },
  {
    issue:
      'Продавцы забывают или не испытывают должного интереса к старым клиентам, потому редко связываются с ними',
    solution:
      'Персональное видео-обращение от ТОП-менеджмента компании с предоставлением личной прораммы лояльности убедит клиента стать максимально приверженным к бренду.',
  },
]

export const IssueSolutionList = () => {
  return (
    <div className={s.issue_solution_list}>
      <div className={s.issue_solution_list__wrapper}>
        <div className={s.issue_solution_list__point_title}>
          <h3 className={s.issue_solution_list__point}>Проблемы и решение</h3>
          <h4
            className={cn(s.issue_solution_list__title, 'text-shadow-custom')}
          >
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
          {list.map(({ issue, solution }, index) => (
            <IssueSolution key={index} issue={issue} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  )
}
