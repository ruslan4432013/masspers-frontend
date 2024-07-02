import Image, { StaticImageData } from 'next/image'
import s from './personalization-item.module.scss'

type Props = {
  image: StaticImageData
  description: string
}

export const PersonalizationItem = ({ image, description }: Props) => {
  return (
    <div className={s.personalization_item}>
      <Image src={image} alt={description.slice(1, 20)} />
      <p className={s.personalization_item__description}>{description}</p>
    </div>
  )
}
