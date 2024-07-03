'use client'

import s from './history.module.scss'
import { Select } from '@/shared/ui/select'
import { ChangeEvent, useState } from 'react'
import aquaTerm from './aqua-term.png'
import Image, { StaticImageData } from 'next/image'

const years: string[] = ['2019', '2020', '2021']

type HistoryYear = Record<
  string,
  {
    year: string
    info: string
    img: StaticImageData
  }
>

const historyYear: HistoryYear = {
  '2019': {
    year: '2019',
    info: 'Использование персонализированных видео увеличило конверсию в подключение новых тарифов на 5-20%. Сравнение результатов происходило на различных сегментах аудитории, сравнивали конверсию в целевое действие с баннера и конверсию после просмотра персонализированного видео внедряем в MassPers систему статистики',
    img: aquaTerm,
  },
  '2020': {
    year: '2020',
    info: 'Использование персонализированных видео увеличило конверсию в подключение новых тарифов на 5-20%. Сравнение результатов происходило на различных сегментах аудитории, сравнивали конверсию в целевое действие с баннера и конверсию после просмотра персонализированного видео внедряем в MassPers систему статистики1',
    img: aquaTerm,
  },
  '2021': {
    year: '2021',
    info: 'Использование персонализированных видео увеличило конверсию в подключение новых тарифов на 5-20%. Сравнение результатов происходило на различных сегментах аудитории, сравнивали конверсию в целевое действие с баннера и конверсию после просмотра персонализированного видео внедряем в MassPers систему статистики2',
    img: aquaTerm,
  },
}

export const History = () => {
  const [year, setYear] = useState<string>(years[0])
  const onYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
  }

  return (
    <div className={s.history}>
      <div className={s.history__point_title}>
        <h3 className={s.history__point}>История</h3>
        <h4 className={s.history__title}>С чего начинали?</h4>
      </div>

      <div className={s.history__select_wrapper}>
        <Select
          value={year}
          onChange={onYearChange}
          className={s.history__select}
        >
          {years.map((y, idx) => (
            <option key={y + idx} className={s.history__option}>
              {y}
            </option>
          ))}
        </Select>
      </div>

      <div className={s.history__info_wrapper}>
        <h5 className={s.history__year}>{year} год</h5>
        <p className={s.history__text}>{historyYear[year].info}</p>
        <span className={s.history__work_with}>Начинаем работать:</span>
        <div className={s.history__partners_img_wrapper}>
          <Image
            src={historyYear[year].img}
            alt={historyYear[year].info.slice(0, 20)}
          />
        </div>
      </div>
    </div>
  )
}
