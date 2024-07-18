import s from './article-preview.module.scss'
import Link from 'next/link'
import { RedArrow } from '@/shared/ui/red-arrow'
import { StaticImageData } from 'next/image'

type Props = {
  articlePreview: {
    id: string
    image: StaticImageData
    date: string
    name: string
  }
}

export const ArticlePreview = ({ articlePreview }: Props) => {
  const { id, image, date, name } = articlePreview

  return (
    <div className={s.article_preview}>
      <div className={s.article_preview__image_wrapper}>
        <img
          src={image.src}
          alt="banner"
          className={s.article_preview__image}
        />
      </div>

      <div className={s.article_preview__info}>
        <span className={s.article_preview__date}>{date}</span>

        <p className={s.article_preview__name}>{name}</p>
      </div>

      <Link href={`/article/${id}`} className={s.article_preview__link}>
        К статье
        <RedArrow />
      </Link>
    </div>
  )
}
