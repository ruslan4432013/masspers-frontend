import { ArticlePreview } from '@/widgets/article-preview'
import { ArticleContent } from '@/widgets/article-content'
import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'
import { PopularNews } from '@/widgets/popular-news'

const ArticlePage = () => {
  return (
    <section>
      <ArticlePreview />
      <div className="mt-[60px] md:mt-[80px] xl:mt-[86px]">
        <ArticleContent />
      </div>
      <div className="mt-[60px] md:mt-[80px] xl:hidden">
        <OurTeam />
      </div>
      <div className="mt-[60px] md:mt-[80px] xl:hidden">
        <ApplicationForm />
      </div>
      <div className="hidden xl:block xl:mt-[80px]">
        <PopularNews />
      </div>
    </section>
  )
}

export default ArticlePage
