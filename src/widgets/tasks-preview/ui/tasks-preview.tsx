import s from './tasks-preview.module.scss'
import Image from 'next/image'
import playersImg from './masspers-players.png'
import masspersLogo from './masspers-logo.png'

export const TasksPreview = () => {
  return (
    <div className={s.tasks_preview}>
      <div className={s.tasks_preview__inner}>
        <div className={s.tasks_preview__left}>
          <div className={s.tasks_preview__text}>
            <h3 className={s.tasks_preview__title}>
              Позиционирование технологии
            </h3>
            <Image
              src={masspersLogo}
              alt={'masspers logo'}
              className={s.tasks_preview__logo}
            />
            <h3 className={s.tasks_preview__title}>как бренда</h3>
          </div>
          <p className={s.tasks_preview__subtitle}>
            Рассказываем о способах взаимодейтсвия бренда с клиентами через
            цели, ценности, боли и их решения
          </p>
        </div>

        <div className={s.tasks_preview__image_wrapper}>
          <Image
            className={s.tasks_preview__image}
            src={playersImg}
            alt={'player img'}
          />
        </div>
      </div>
    </div>
  )
}
