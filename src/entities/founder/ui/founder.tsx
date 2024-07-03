import s from './founder.module.scss'
import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'

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
          <p
            className={cn(s.founder__info_text, s.founder__info_text_mr_second)}
          >
            {inTeam}
          </p>
          <p className={cn(s.founder__info_text, s.founder__info_text_mr)}>
            {responsibilities}
          </p>
          <p className={cn(s.founder__info_text, s.founder__info_text_mr)}>
            {pride}
          </p>
        </div>
      </div>

      <div className={s.founder__photo_wrapper}>
        <Image src={photo} alt={name} className={s.founder__photo} />
      </div>
    </div>
  )
}
