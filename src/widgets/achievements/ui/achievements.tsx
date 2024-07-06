'use client'

import s from './achievements.module.scss'
import slideImg from './slideImg.png'
import { AchievementsSwiper } from '@/widgets/achievements/ui/achievements-swiper'
import Image from 'next/image'

const slides = [
  {
    num: 1,
    img: slideImg,
  },
  {
    num: 2,
    img: slideImg,
  },
  {
    num: 3,
    img: slideImg,
  },
  {
    num: 4,
    img: slideImg,
  },
  {
    num: 5,
    img: slideImg,
  },
]

export const Achievements = () => {
  return (
    <div className={s.achievements}>
      <div className={s.achievements__info}>
        <h3 className={s.achievements__title}>Наши достижения</h3>
        <h4 className={s.achievements__subtitle}>
          <span className={s.achievements__year}>2023</span>
          Специальный приз за передовое технологическое решение
        </h4>
        <p className={s.achievements__text}>
          *Краткое описание достижения/награды/как к этому приходили* Значимость
          этих проблем настолько очевидна, что сложившаяся структура организации
          требуют от нас анализа модели развития.
        </p>
      </div>

      <div className={s.achievements__achievements_swiper_wrapper}>
        <AchievementsSwiper>
          {slides.map((slide) => (
            <Image key={slide.num} src={slide.img} alt={slide.img.toString()} />
          ))}
        </AchievementsSwiper>
      </div>
    </div>
  )
}
