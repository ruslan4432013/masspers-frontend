import s from './article-preview.module.scss'
import { RedArrow } from '@/shared/ui/red-arrow'
import Link from 'next/link'

export const ArticlePreview = () => {
  return (
    <div className={s.article_preview}>
      <div className={s.article_preview__wrapper}>
        <Link href={`/blog`} className={s.article_preview__link}>
          <RedArrow className={s.article_preview__arrow} />
          Вернуться к кейсам
        </Link>

        <p className={s.article_preview__title}>
          Персонализированный видеомаркетинг: следующая революция в
          контент-маркетинге
        </p>

        <span className={s.article_preview__date}>7.02.2024</span>
      </div>
    </div>
  )
}
