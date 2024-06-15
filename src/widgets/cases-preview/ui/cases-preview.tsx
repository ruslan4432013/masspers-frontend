import s from './cases-preview.module.scss'
import { Button } from '@/shared/ui/button'
import playersImg from './masspers-players.png'
import Image from 'next/image'

export const CasesPreview = () => {
  return (
    <div className={s.cases_preview}>
      <div className={s.cases_preview__inner}>
        <div className={s.cases_preview__top}>
          <h3 className={s.cases_preview__title}>КЕЙСЫ</h3>
          <p className={s.cases_preview__subtitle}>
            Здесь вы можете ознакомиться с проектами, которые мы реализовали для
            своих клиентов из разных отраслей
          </p>
          <Button className={s.cases_preview__button}>Как это работает</Button>
        </div>
        <div className={s.cases_preview__image_wrapper}>
          <Image
            className={s.cases_preview__image}
            src={playersImg}
            alt={'player img'}
          />
        </div>
      </div>
    </div>
  )
}
