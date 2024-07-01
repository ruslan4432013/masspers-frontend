import s from './stage-item.module.scss'

type Props = {
  no: number
  title: string
  description: string
}

export const StageItem = ({ no, title, description }: Props) => {
  return (
    <div className={s.stage_item}>
      <div className={s.stage_item__circle}>{no}</div>
      <div className={s.stage_item__info}>
        <h5 className={s.stage_item__title}>{title}</h5>
        <p className={s.stage_item__description}>{description}</p>
      </div>
    </div>
  )
}
