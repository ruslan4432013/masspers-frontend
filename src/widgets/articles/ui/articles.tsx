import s from './articles.module.scss'
import banner1 from './banner1.png'
import banner2 from './banner2.png'
import banner3 from './banner3.png'
import { ArticleIntro } from '@/entities/article-intro'

const articles = [
  {
    id: '1',
    image: banner1,
    date: '7.02.2024',
    name: 'Московский врач записал персональные видеообращения почти полумиллиону...',
  },
  {
    id: '2',
    image: banner2,
    date: '28.07.2023',
    name: 'Персонализированный видеомаркетинг: следующая революция в контент-маркетинге',
  },
  {
    id: '3',
    image: banner3,
    date: '21.09.2020',
    name: 'Персонализированный видеомаркетинг: следующая революция в контент-маркетинге',
  },
]

export const Articles = () => {
  return (
    <div className={s.articles}>
      <div className={s.articles__top}>
        <h3 className={s.articles__title}>Блог</h3>
        <p className={s.articles__text}>Последние новости нашей команды</p>
      </div>

      <div className={s.articles__intros_wrapper}>
        {articles.map((item) => (
          <ArticleIntro key={item.id} articleIntro={item} />
        ))}
      </div>
    </div>
  )
}
