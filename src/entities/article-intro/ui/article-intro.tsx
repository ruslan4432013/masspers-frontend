import s from './article-intro.module.scss'
import Link from 'next/link'
import { RedArrow } from '@/shared/ui/red-arrow'
import { StaticImageData } from 'next/image'

type Props = {
  articleIntro: {
    id: string
    image: StaticImageData
    date: Date
    name: string
  }
}

export const ArticleIntro = ({ articleIntro }: Props) => {
  const { id, image, date, name } = articleIntro

  return (
    <div className={s.article_intro}>
      <div className={s.article_intro__image_wrapper}>
        <img src={image.src} alt="banner" className={s.article_intro__image} />
      </div>

      <div className={s.article_intro__info}>
        <time className={s.article_intro__date} dateTime={date.toUTCString()}>
          {date.toLocaleDateString('ru-RU')}
        </time>

        <p className={s.article_intro__name}>{name}</p>
      </div>

      <Link href={`/article/${id}`} className={s.article_intro__link}>
        К статье
        <RedArrow />
      </Link>
    </div>
  )
}
