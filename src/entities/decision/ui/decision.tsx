import Image from 'next/image'
import { DecisionType } from './decision.type'
import s from './decision.module.scss'

type Props = {
  decision: DecisionType
}

export const Decision = ({ decision }: Props) => {
  const { image, title, text } = decision

  return (
    <div className={s.decision}>
      <div className={s.decision__image_wrapper}>
        <Image src={image} alt={title} />
      </div>

      <h4 className={s.decision__title}>{title}</h4>

      <p className={s.decision__text}>{text}</p>
    </div>
  )
}
