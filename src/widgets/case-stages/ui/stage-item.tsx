import s from './stage-item.module.scss'
import cn from 'classnames'

type Props = {
  no: number
  title: string
  description: string
  className?: string
}

export const StageItem = ({ no, title, description, className }: Props) => {
  return (
    <div className={s.stage_item}>
      <div className={cn(s.stage_item__circle_wrapper, className)}>
        <div className={s.stage_item__circle}>{no}</div>
      </div>
      <div className={s.stage_item__info}>
        <h5 className={s.stage_item__title}>{title}</h5>
        <p className={s.stage_item__description}>{description}</p>
      </div>
    </div>
  )
}
