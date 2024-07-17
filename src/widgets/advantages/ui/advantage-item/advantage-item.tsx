import s from './advantage-item.module.scss'
import Image from 'next/image'
import plus from '../plus.svg'
import minus from '../minus.svg'
import plusMinus from '../plus-minus.svg'

type SignImage = Record<string, string>

const signImage: SignImage = {
  plus: plus,
  minus: minus,
  plusMinus: plusMinus,
}

type Props = {
  item: {
    sign: string
    description: string
  }
}

export const AdvantageItem = (props: Props) => {
  const { item } = props

  return (
    <div key={item.description} className={s.advantage_item}>
      <div className={s.advantage_item__sign}>
        <Image src={signImage[item.sign]} alt={'sign'} />
      </div>
      <div className={s.advantage_item__description}>{item.description}</div>
    </div>
  )
}
