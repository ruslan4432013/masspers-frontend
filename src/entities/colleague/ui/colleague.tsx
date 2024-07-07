import s from './colleague.module.scss'
import Image, { StaticImageData } from 'next/image'

type Props = {
  colleague: {
    photo: StaticImageData
    name: string
    post: string
    education: {
      institute: string
      yearEnding: string
      specialty: string
    }
    slogan: string
    responsibilities: string
    pride: string
  }
}

export const Colleague = ({ colleague }: Props) => {
  const {
    photo,
    name,
    post,
    education: { institute, yearEnding, specialty },
    slogan,
    responsibilities,
    pride,
  } = colleague

  return (
    <div className={s.colleague}>
      <div className={s.colleague__photo_name_post_wrapper}>
        <div className={s.colleague__photo_wrapper}>
          <Image src={photo} alt={name} className={s.colleague__photo} />
        </div>
        <div className={s.colleague__name_post_wrapper}>
          <span className={s.colleague__name}>{name}</span>
          <p className={s.colleague__post}>{post}</p>
        </div>
      </div>
      <div>
        <p>{institute}</p>
        <p>{yearEnding}</p>
        <p>{specialty}</p>
      </div>
      <p>{slogan}</p>
      <p>{responsibilities}</p>
      <p>{pride}</p>
    </div>
  )
}
