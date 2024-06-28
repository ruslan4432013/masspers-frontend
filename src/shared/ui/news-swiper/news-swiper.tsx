'use client'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import s from './news-swiper.module.scss'
import { Children, ReactNode, useCallback, useState } from 'react'

type Props = {
  children: ReactNode[]
}

export const NewsSwiper = ({ children }: Props) => {
  const arrayChildren = Children.toArray(children)
  const [swiperRef, setSwiperRef] = useState<SwiperClass>()

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev()
  }, [swiperRef])

  const handleNext = useCallback(() => {
    swiperRef?.slideNext()
  }, [swiperRef])
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        modules={[Pagination]}
        className={s.news_paper__swiper}
        onSwiper={setSwiperRef}
        pagination={{
          clickable: true,
          bulletActiveClass: s.news_paper__bullet_active,
        }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
            pagination: false,
          },
        }}
      >
        {Children.map(arrayChildren, (slide) => (
          <SwiperSlide>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev" onClick={handlePrevious}></button>
      <button className="swiper-button-next" onClick={handleNext}></button>
    </div>
  )
}
