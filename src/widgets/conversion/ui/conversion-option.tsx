import { Button } from '@/shared/ui/button'
import s from './conversion-option.module.scss'
import Image, { StaticImageData } from 'next/image'

type Props = {
  option: {
    img: StaticImageData
    percent: string
    text: string
  }
}

export const ConversionOption = ({ option }: Props) => {
  const { img, percent, text } = option

  return (
    <div className={s.conversion_option}>
      <Image
        src={img}
        alt={text.slice(0, 20)}
        className={s.conversion_option__img}
      />
      <Button variant="secondary" className={s.conversion_option__button}>
        {percent}
      </Button>
      <p className={s.conversion_option__text}>{text}</p>
    </div>
  )
}
