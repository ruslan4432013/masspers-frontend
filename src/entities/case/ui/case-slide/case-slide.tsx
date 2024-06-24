import Image from 'next/image'
import Link from 'next/link'
import s from './case-slide.module.scss'
import { RedArrow } from '@/shared/ui/red-arrow'

interface Props {
  caseImg: string
  title: string
  description: string
  linkTo: string
}

export const CaseSlide = (props: Props) => {
  const { caseImg, title, description, linkTo } = props
  return (
    <div className={s.case_slide}>
      <div className={s.case_slide__image_wrapper}>
        <Image
          className={s.case_slide__image}
          src={caseImg}
          width={400}
          height={400}
          alt={`preview for ${title}`}
        />
      </div>
      <div className={s.case_slide__meta}>
        <h5 className={s.case_slide__title}>{title}</h5>
        <p>{description}</p>
        <Link href={linkTo} className={s.case_slide__link}>
          <span>Перейти к проекту</span>
          <RedArrow />
        </Link>
      </div>
    </div>
  )
}
