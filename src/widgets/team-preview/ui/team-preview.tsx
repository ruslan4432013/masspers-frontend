import s from './team-preview.module.scss'
import Image from 'next/image'
import teamImage from './team_image.jpg'

export const TeamPreview = () => {
  return (
    <div className={s.team_preview}>
      <div className={s.team_preview__inner}>
        <div className={s.team_preview__left}>
          <h3 className={s.team_preview__title}>
            О команде Лаборатории Рыночных Коммуникаций
          </h3>
          <p className={s.team_preview__subtitle}>
            Рассказываем о способах взаимодейтсвия бренда с клиентами через
            цели, ценности, боли и их решения
          </p>
        </div>

        <div className={s.team_preview__image_wrapper}>
          <Image
            className={s.team_preview__image}
            src={teamImage}
            alt={'player img'}
          />
        </div>
      </div>
    </div>
  )
}
