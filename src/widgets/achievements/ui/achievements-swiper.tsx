'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Children, ReactNode } from 'react'
import s from './achievements-swiper.module.scss'

type Props = {
  children?: ReactNode[]
}

export const AchievementsSwiper = ({ children }: Props) => {
  const arrayChildren = Children.toArray(children)

  return (
    <div className={s.achievements_swiper}>
      <Swiper
        spaceBetween={24}
        modules={[Pagination, Navigation]}
        navigation
        pagination={{
          clickable: true,
          bulletActiveClass: s.pagination__bullet_active,
          horizontalClass: s.pagination__vertical,
        }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
            pagination: false,
          },
        }}
        className={s.achievements_swiper__swiper}
      >
        {Children.map(arrayChildren, (slide) => (
          <SwiperSlide className={s.achievements_swiper__swiper_slide}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
