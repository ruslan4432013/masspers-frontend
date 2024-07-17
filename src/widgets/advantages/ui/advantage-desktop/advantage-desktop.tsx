import { AdvantageType } from '../advantage.type'
import s from './advantage-desktop.module.scss'
import { AdvantageItem } from '../advantage-item'
import { AdvantageTotal } from '../advantage-total'

type Props = {
  advantage: AdvantageType
}

export const AdvantageDesktop = ({ advantage }: Props) => {
  const { title, text, prosAndCons, totalInfo } = advantage

  return (
    <div className={s.advantage_desktop}>
      <div className={s.advantage_desktop__subheader}>
        <h5 className={s.advantage_desktop__title}>{title}</h5>
        <p className={s.advantage_desktop__general_text}>{text}</p>
      </div>

      <div className={s.advantage_desktop__pros_cons_total}>
        <div className={s.advantage_desktop__pros_and_cons}>
          {prosAndCons.map((item) => (
            <AdvantageItem key={item.description} item={item} />
          ))}
        </div>

        <AdvantageTotal totalInfo={totalInfo} />
      </div>
    </div>
  )
}
