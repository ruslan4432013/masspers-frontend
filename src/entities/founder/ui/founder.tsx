import s from './founder.module.scss'
import Image, { StaticImageData } from 'next/image'

type Props = {
  name: string
  who: string
  education: string
  inTeam: string
  responsibilities: string
  pride: string
  photo: StaticImageData
}

export const Founder = (props: Props) => {
  const { name, who, education, inTeam, responsibilities, pride, photo } = props
  return (
    <div className={s.founder}>
      <div>
        <div className={s.founder__name_who_wrapper}>
          <h5 className={s.founder__name}>{name}</h5>
          <span className={s.founder__who}>{who}</span>
        </div>

        <div className={s.founder__info}>
          <p className={s.founder__info_text}>{education}</p>
          <p className={s.founder__info_text}>{inTeam}</p>
          <p className={s.founder__info_text}>{responsibilities}</p>
          <p className={s.founder__info_text}>{pride}</p>
        </div>
      </div>

      <div className={s.founder__photo_wrapper}>
        <Image src={photo} alt={name} className={s.founder__photo} />
      </div>
    </div>
  )
}
