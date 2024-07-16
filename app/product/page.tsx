import { ApplicationForm } from '@/widgets/application-form'
import { ClientCases } from '@/widgets/client-cases'
import { ProductPreview } from '@/widgets/product-preview'
import { TechnologyExplanation } from '@/widgets/technology-explanation'
import { Conversion } from '@/widgets/conversion'
import { TaskSolvers } from '@/widgets/task-solvers'
import { Advantages } from '@/widgets/advantages'
import { Decisions } from '@/widgets/decisions'
import { Introduction } from '@/widgets/introduction'
import { OurTeam } from '@/widgets/our-team'

const ProductPage = () => {
  return (
    <section>
      <ProductPreview />
      <div className="mt-[60px] md:mt-[80px]">
        <TechnologyExplanation />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <Conversion />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <TaskSolvers />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <Advantages />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <Decisions />
      </div>
      <OurTeam />
      <div className="mt-[60px] md:mt-[80px]">
        <Introduction />
      </div>
      <ClientCases />
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm variant="secondary" />
      </div>
    </section>
  )
}

export default ProductPage
