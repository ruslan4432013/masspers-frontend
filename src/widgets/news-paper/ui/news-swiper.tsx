'use client'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { NewsSlide } from '@/entities/news'
import newsImg from './news-example.png'
import { Pagination } from 'swiper/modules'
import s from './news-paper.module.scss'
import { useCallback, useState } from 'react'

type Props = {
  date: Date
}

export const NewsSwiper = ({ date }: Props) => {
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
        <SwiperSlide>
          <NewsSlide
            date={date}
            title={`Персонализированный видеомаркетинг: следующая революция в контент-маркетинге`}
            subtitle={`«Персонализированный Видеоконтент Может Стать Маркетинговым Прорывом, В Котором Нуждаются Бренды”...`}
            previewImg={newsImg.src}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsSlide
            date={date}
            title={`Персонализированный видеомаркетинг: следующая революция в контент-маркетинге`}
            subtitle={`«Персонализированный Видеоконтент Может Стать Маркетинговым Прорывом, В Котором Нуждаются Бренды”...`}
            previewImg={newsImg.src}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsSlide
            date={date}
            title={`Персонализированный видеомаркетинг: следующая революция в контент-маркетинге`}
            subtitle={`«Персонализированный Видеоконтент Может Стать Маркетинговым Прорывом, В Котором Нуждаются Бренды”...`}
            previewImg={newsImg.src}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsSlide
            date={date}
            title={`Персонализированный видеомаркетинг: следующая революция в контент-маркетинге`}
            subtitle={`«Персонализированный Видеоконтент Может Стать Маркетинговым Прорывом, В Котором Нуждаются Бренды”...`}
            previewImg={newsImg.src}
          />
        </SwiperSlide>
      </Swiper>
      <button className="swiper-button-prev" onClick={handlePrevious}></button>
      <button className="swiper-button-next" onClick={handleNext}></button>
    </div>
  )
}
