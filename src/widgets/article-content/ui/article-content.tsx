'use client'

import s from './article-content.module.scss'
import { Editor } from '@/widgets/article-content/ui/editor/editor'

export const ArticleContent = () => {
  return (
    <div className={s.article_content}>
      <Editor />
    </div>
  )
}
