import s from './news-paper.module.scss'
import newsImg from './news-example.png'
import { NewsSlide } from '@/entities/news'

const NewsPaper = () => {
  const date = new Date()
  return (
    <div className="xl:container">
      <h5 className={s.news_paper__title}>Последние новости нашей команды</h5>
      <div className="mt-[22px] md:max-w-[900px] md:mx-auto xl:max-w-[initial]">
        <div className="flex flex-col md:flex-row">
          <NewsSlide
            date={date}
            title={`Персонализированный видеомаркетинг: следующая революция в контент-маркетинге`}
            subtitle={`«Персонализированный Видеоконтент Может Стать Маркетинговым Прорывом, В Котором Нуждаются Бренды”...`}
            previewImg={newsImg.src}
          />
          <NewsSlide
            date={date}
            title={`Персонализированный видеомаркетинг: следующая революция в контент-маркетинге`}
            subtitle={`«Персонализированный Видеоконтент Может Стать Маркетинговым Прорывом, В Котором Нуждаются Бренды”...`}
            previewImg={newsImg.src}
          />
          <NewsSlide
            date={date}
            title={`Персонализированный видеомаркетинг: следующая революция в контент-маркетинге`}
            subtitle={`«Персонализированный Видеоконтент Может Стать Маркетинговым Прорывом, В Котором Нуждаются Бренды”...`}
            previewImg={newsImg.src}
          />
        </div>
      </div>
    </div>
  )
}

export default NewsPaper
