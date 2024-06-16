import { CaseSlide } from '@/entities/case'
import caseSlideImg from './case-slide.png'
import s from './case-slides.module.scss'
import { NewsSwiper } from '@/shared/ui/news-swiper'

export const CaseSlides = () => {
  return (
    <div className={s.case_slides}>
      <NewsSwiper>
        <CaseSlide
          caseImg={caseSlideImg.src}
          title={'АВТОДОР'}
          description={'*краткое описание проекта*'}
          linkTo={'/'}
        />
        <CaseSlide
          caseImg={caseSlideImg.src}
          title={'АВТОДОР'}
          description={'*краткое описание проекта*'}
          linkTo={'/'}
        />
        <CaseSlide
          caseImg={caseSlideImg.src}
          title={'АВТОДОР'}
          description={'*краткое описание проекта*'}
          linkTo={'/'}
        />
        <CaseSlide
          caseImg={caseSlideImg.src}
          title={'АВТОДОР'}
          description={'*краткое описание проекта*'}
          linkTo={'/'}
        />
      </NewsSwiper>
    </div>
  )
}
