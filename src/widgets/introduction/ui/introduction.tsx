import s from './introduction.module.scss'
import Image from 'next/image'
import logoImage from './logo.svg'
import { Button } from '@/shared/ui/button'
import { IntroductionStep } from './step'

const introductionSteps = [
  {
    title: 'Экспертиза',
    text: 'Выявим наиболее перспективные направления работы MassPers в вашем бизнесе и предложим проект',
  },
  {
    title: 'Продакшн',
    text: 'Разработаем сценарии персонализированных видео, снимем их и смонтируем "под ключ',
  },
  {
    title: 'Внедрение',
    text: 'Внедрим IT-платформу в вашу CRM систему и при необходимости на ваши сервера. Настроим бесперебойную отправку сгенерированных персонализированных видео адресатам',
  },
  {
    title: 'Генерация',
    text: 'Запрограммируем в системе MassPers генерацию персонализированных видео и их отправку в вашу CRM систему',
  },
  {
    title: 'Доставка и метрики',
    text: 'Проследим доставку и получение адресатом сообщения с видеороликом. Проанализируем и предоставим конверсионный отчет со всеми цифрами по проведенной рассылке',
  },
  {
    title: 'Пролонгация',
    text: 'Продолжим работать над улучшением результатов и расширению коммуникационных каналов',
  },
]

export const Introduction = () => {
  return (
    <div className={s.introduction}>
      <h3 className={s.introduction__title}>Как внедряется MassPers?</h3>

      <div className={s.introduction__steps}>
        {introductionSteps.map((step, idx) => (
          <IntroductionStep
            key={step.title}
            step={{ stepNumber: idx + 1, ...step }}
          />
        ))}
      </div>

      <div className={s.introduction__order}>
        <h4 className={s.introduction__order_title}>
          Будьте спокойны и занимайтесь своими, более важными, задачами!
        </h4>

        <div className={s.introduction__order_image_wrapper}>
          <Image
            src={logoImage}
            alt={'logo'}
            className={s.introduction__order_image}
          />
        </div>

        <Button className={s.introduction__order_button}>
          Заказать внедрение
        </Button>
      </div>
    </div>
  )
}
