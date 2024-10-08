'use client'

import s from './history.module.scss'
import { Select } from '@/shared/ui/select'
import { ChangeEvent, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Stepper } from './stepper'
import aquaTerm from './aqua-term.png'
import mriya from './mriya.png'
import porto from './porto.png'
import rolf from './rolf.png'
import sign from './sign.png'
import airplane from './airplane.png'
import a101 from './a101.png'
import sitronics from './sitronics.png'
import pik from './pik.png'

type HistoryYear = {
  year: string
  info: string
  img: StaticImageData[]
}

const historyYear: HistoryYear[] = [
  {
    year: '2016',
    info: 'Являемся подрядчиком по аутсорсингу маркетинговых коммуникаций Крымской Гостиницы Мрия',
    img: [mriya],
  },
  {
    year: '2017',
    info: 'Снимаем и монтируем персонализированные ролики с Новогодним поздравлением для ВИП-гостей Гостиницы Мрия. Персонализируем вручную',
    img: [mriya],
  },
  {
    year: '2018',
    info: 'Разрабатываем технологию автоматической генерации видео-сообщений с рассылкой через СРМ, так как получаем большой заказ от Porto-Mare',
    img: [porto],
  },
  {
    year: '2019',
    info: 'Работая с Машук Аква-Терм, обнаружили, что технология дала сбой и сообщения неотправляются, продажи упали на 20%, при том и у других клиентов. Внедряем вMassPers систему статистики',
    img: [aquaTerm],
  },
  {
    year: '2020',
    info: 'Запускаем проект polit.video, начинаем работать с политическим направлением. Разрабатываем технологию интерактивных видео',
    img: [rolf, sign],
  },
  {
    year: '2022',
    info: 'Получаем инвестиции и брендируем технологию в MassPers, тем самым привлекая новых крупных клиентов, таких как Рольф и Самолет',
    img: [airplane, a101, sitronics, pik],
  },
  {
    year: '2024',
    info: 'Использование персонализированных видео увеличило конверсию в подключение новых тарифов на 5-20%. Сравнение результатов происходило на различных сегментах аудитории, сравнивали конверсию в целевое действие с баннера и конверсию после просмотра персонализированного видео внедряем в MassPers систему статистики',
    img: [aquaTerm],
  },
]

const years = historyYear.map((el) => el.year)

const historyYearCollection = historyYear.reduce<Record<string, HistoryYear>>(
  (acc, curr) => ({
    ...acc,
    [curr.year]: curr,
  }),
  {}
)

export const History = () => {
  const [year, setYear] = useState<string>(years[0])
  const onYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
  }
  const handleYearChange = (year: string) => {
    setYear(year)
  }

  return (
    <div className={s.history}>
      <div className={s.history__inner}>
        <div className={s.history__point_title}>
          <h3 className={s.history__point}>История</h3>
          <h4 className={s.history__title}>С чего начинали?</h4>
        </div>

        <div>
          <div className={s.history__select_wrapper}>
            <Select
              value={year}
              onChange={onYearChange}
              className={s.history__select}
            >
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </Select>
          </div>

          <div className={s.history__stepper_year}>
            <Stepper steps={years} handleStepChange={handleYearChange} />
          </div>
        </div>

        <div className={s.history__info_wrapper}>
          <div className={s.history__year_text_wrapper}>
            <h5 className={s.history__year}>{year} год</h5>
            <p className={s.history__text}>
              {historyYearCollection[year].info}
            </p>
          </div>
          <div className={s.history__work_partners}>
            <span className={s.history__work_with}>Начинаем работать:</span>
            <div className={s.history__partners_img_wrapper}>
              {historyYearCollection[year].img.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={historyYearCollection[year].info.slice(0, 20)}
                  className={s.history__img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
