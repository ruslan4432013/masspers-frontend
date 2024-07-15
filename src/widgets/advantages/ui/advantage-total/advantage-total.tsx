import s from './advantage-total.module.scss'
import Image from 'next/image'
import plusImage from '../plus.svg'
import plusMinusImage from '../plus-minus.svg'
import minusImage from '../minus.svg'

type Props = {
  totalInfo: {
    plus: number
    plusMinus: number
    minus: number
    text: string
  }
}

export const AdvantageTotal = ({ totalInfo }: Props) => {
  const { plus, plusMinus, minus, text } = totalInfo

  return (
    <div className={s.advantage_total}>
      <div className={s.advantage_total__signs}>
        <div className={s.advantage_total__sign}>
          <Image src={plusImage} alt={'plus'} />
          <span>{plus > 0 ? `+${plus}` : plus}</span>
        </div>
        <div className={s.advantage_total__sign}>
          <Image src={plusMinusImage} alt={'plus or minus'} />
          <span>{plusMinus > 0 ? `+${plusMinus}` : plusMinus}</span>
        </div>
        <div className={s.advantage_total__sign}>
          <Image src={minusImage} alt={'minus'} />
          <span>{minus > 0 ? `-${minus}` : minus}</span>
        </div>
      </div>
      <p className={s.advantage_total__text}>{text}</p>
    </div>
  )
}
