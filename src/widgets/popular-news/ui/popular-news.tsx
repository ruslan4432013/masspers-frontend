import s from './popular-news.module.scss'
import { NewsSlide } from '@/entities/news'
import banner from './banner.png'

const news = [
  {
    previewImg: banner,
    date: new Date(2020, 8, 21),
    title:
      'Персонализированный видеомаркетинг: следующая революция в контент-маркетинге',
    subtitle:
      '«Персонализированный Видеоконтент Может Стать Маркетинговым Прорывом, В Котором Нуждаются Бренды”...',
  },
  {
    previewImg: banner,
    date: new Date(2023, 6, 26),
    title:
      'Персонализация. Кейс 2023. «МегаФон» внедрил новый маркетинговый инструмент и увеличил продажи на 20%',
    subtitle:
      'Пример начала видео с обращением по имени. Ролик МегаФон ищите в мобильном приложении, в разделе "Для меня"...',
  },
  {
    previewImg: banner,
    date: new Date(2023, 6, 26),
    title:
      'Анастасия Ракова рассказала о рассылке полумиллиона персональных видео от врача игнорирующим свои хронические болезни москвичам',
    subtitle:
      'Москва уделяет особое внимание пациентам с серьезными хроническими заболеваниями и развивает принципиально новый формат диспансерного наблюдения...',
  },
]

export const PopularNews = () => {
  return (
    <div className={s.popular_news}>
      <h3 className={s.popular_news__title}>Популярное</h3>

      <div className={s.popular_news__news_wrapper}>
        {news.map((item) => (
          <NewsSlide
            key={item.title}
            previewImg={item.previewImg.src}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  )
}
