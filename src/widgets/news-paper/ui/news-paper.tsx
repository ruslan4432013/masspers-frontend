import s from './news-paper.module.scss'
import NewsSwiper from './news-swiper'

const NewsPaper = () => {
  const date = new Date()
  return (
    <div className="xl:container">
      <h5 className={s.news_paper__title}>Последние новости нашей команды</h5>
      <div className="mt-[22px] md:max-w-[900px] md:mx-auto xl:max-w-[initial]">
        <NewsSwiper date={date} />
      </div>
    </div>
  )
}

export default NewsPaper
