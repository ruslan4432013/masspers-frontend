import s from './our-team.module.scss'
import foundersImg from './founders.png'
import clientImg from './client-image.png'
import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export const OurTeam = () => {
  return (
    <div className={s.our_team__paper}>
      <div className={s.our_team__description_wrapper}>
        <p className={s.our_team__title}>Наша команда</p>
        <p className={s.our_team__description}>
          Разрабатываем эффективные инновационные технологии рыночных
          коммуникаций для укрепления позиций бизнеса
        </p>
        <Link href={'/'} className={s.our_team__link_button}>
          <Button className={s.our_team__button}>Подробнее о команде</Button>
        </Link>
      </div>
      <div className={s.our_team__images}>
        <Image
          className={s.our_team__image}
          src={clientImg}
          alt={'client image'}
        />
        <Image
          className={s.our_team__image}
          src={clientImg}
          alt={'client image'}
        />
        <Image
          className={s.our_team__image}
          src={clientImg}
          alt={'client image'}
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
