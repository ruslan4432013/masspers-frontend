import s from './case-preview.module.scss'
import { ArrowBack } from '@/widgets/case-preview/ui/arrow-back'
import Link from 'next/link'

export const CasePreview = () => {
  return (
    <div className={s.case_preview}>
      <div className={s.case_preview__inner}>
        <div className={s.case_preview__text}>
          <Link href={'/cases'} className={s.case_preview__link}>
            <ArrowBack />
            <span className={s.case_preview__link__text}>
              Вернуться к кейсам
            </span>
          </Link>
          <h3 className={s.case_preview__title}>
            Позиционирование технологии как бренда
          </h3>
          <p className={s.case_preview__subtitle}>
            Летом 2022г представители компании МегаФон обратились к нам с идеей
            по запуску пилотного проекта персонализированных коммуникаций для
            продвижения персонального тарифного плана с индивидуальным
            наполнением – «МегаСилы».
          </p>
          <div className={s.case_preview__area_time}>
            <span className={s.case_preview__area_time__text}>
              Область: телеком
            </span>
            <span className={s.case_preview__area_time__text}>
              Срок реализации: 3 месяца
            </span>
          </div>
        </div>

        <div className={s.case_preview__video_wrapper}>
          <video
            controls
            src={
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
            className={s.case_preview__video}
          />
        </div>
      </div>
    </div>
  )
}
