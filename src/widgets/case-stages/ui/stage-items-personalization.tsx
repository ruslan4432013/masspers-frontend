'use client'
import { StageItem } from './stage-item'
import s from './stage-items-personalization.module.scss'
import { OptionsPersonalization } from '@/widgets/case-stages/ui/options-personalization'

const stages = [
  {
    title: 'Задача',
    description:
      'С помощью персонализированного видео бренд-амбассадоры МегаФон доносили информацию о персональном тарифном плане с индивидуальным наполнением',
  },
  {
    title: 'Решение',
    description:
      'формировали более 400 тыс. уникальных видео. Разместили видео в мобильном приложении МегаФон. Каждый абонент увидел свой персональный видеоролик от бренд-амбассадора МегаФон с кнопкой подключения нового тарифного плана',
  },
  {
    title: 'Целевая метрика',
    description:
      'Увеличить конверсию из просмотров в продажи для абонентов оператора (≈75 млн)',
  },
  {
    title: 'Идея исполнения',
    description:
      'Обращаемся по имени, чтоб привлечь внимание и увеличить глубину просмотра. Отображаем подробности персонального тарифного плана (МегаСилы) и называем стоимость тарифа Хронометраж видео ≈ 25 секунд',
  },
  {
    title: 'Результат',
    description:
      'Использование персонализированных видео увеличило конверсию в подключение новых\n' +
      'тарифов на 5-20%. Сравнение результатов происходило на различных сегментах аудитории,\n' +
      'сравнивали конверсию в целевое действие с баннера и конверсию после просмотра\n' +
      'персонализированного видео',
  },
]

export const StageItemsPersonalization = () => {
  return (
    <div className={s.stage_items_personalization}>
      <div className={s.stage_items_personalization__left}>
        <div className={s.stage_items_personalization__point_title_wrapper}>
          <h3 className={s.stage_items_personalization__point}>Этапы</h3>
          <h4 className={s.stage_items_personalization__title}>
            Рассказываем как пришли к результату
          </h4>
        </div>

        <div className={s.stage_items_personalization__items}>
          {stages.map((item, idx) => (
            <StageItem
              key={item.title + idx}
              no={idx + 1}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <OptionsPersonalization />
    </div>
  )
}
