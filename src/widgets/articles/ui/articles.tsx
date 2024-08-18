import s from './articles.module.scss'
import banner1 from './banner1.png'
import banner2 from './banner2.png'
import banner3 from './banner3.png'
import { ArticleIntro } from '@/entities/article-intro'

const articles = [
  {
    id: '1',
    image: banner1,
    date: new Date(2024, 1, 7),
    name: 'Московский врач записал персональные видеообращения почти полумиллиону...',
  },
  {
    id: '2',
    image: banner2,
    date: new Date(2023, 6, 28),
    name: 'Персонализированный видеомаркетинг: следующая революция в контент-маркетинге',
  },
  {
    id: '3',
    image: banner3,
    date: new Date(2020, 8, 21),
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
