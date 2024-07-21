import Link from 'next/link'
import { RedArrow } from './red-arrow'
import s from './case-item.tooltip.module.scss'

export const CaseItemTooltip = () => {
  return (
    <div className={s.case_item_tooltip}>
      <p className={s.case_item_tooltip__title}>Безопасность</p>
      <p className={s.case_item_tooltip__content}>Краткое содержание проекта</p>
      <Link className={s.case_item_tooltip__link} href={'/'}>
        <span>Подробнее о кейсе</span>
        <RedArrow />
      </Link>
    </div>
  )
}
