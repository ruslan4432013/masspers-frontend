import s from './our-team.module.scss'
import foundersImg from './founders.png'
import clientImg from './client-image.png'
import { ButtonLink } from '@/shared/ui/button'
import Image from 'next/image'
import { URLS } from '@/shared/config/urls'

export const OurTeam = () => {
  return (
    <div className={s.our_team__paper}>
      <div className={s.our_team__description_wrapper}>
        <p className={s.our_team__title}>Наша команда</p>
        <p className={s.our_team__description}>
          Разрабатываем эффективные инновационные технологии рыночных
          коммуникаций для укрепления позиций бизнеса
        </p>
        <ButtonLink href={URLS.TEAM} className={s.our_team__button}>
          Подробнее о команде
        </ButtonLink>
      </div>
      <div className={s.our_team__images}>
        <Image
          className={s.our_team__image}
          src={clientImg}
          alt={'client image 1'}
        />
        <Image
          className={s.our_team__image}
          src={clientImg}
          alt={'client image2'}
        />
        <Image
          className={s.our_team__image}
          src={clientImg}
          alt={'client image3'}
        />
        <Image
          className={s.our_team__image}
          src={clientImg}
          alt={'client image'}
        />
      </div>
      <div className={s.our_team__founders}>
        <Image
          src={foundersImg}
          className={s.our_team__founders_image}
          alt={'Founders: Илья Бугаев, Алексей Бугаев'}
        />
      </div>
    </div>
  )
}
