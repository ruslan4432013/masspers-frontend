import { ApplicationForm } from '@/widgets/application-form'
import { ClientCases } from '@/widgets/client-cases'
import { ProductPreview } from '@/widgets/product-preview'
import { TechnologyExplanation } from '@/widgets/technology-explanation'
import { Conversion } from '@/widgets/conversion'
import { TaskSolvers } from '@/widgets/task-solvers'
import { Advantages } from '@/widgets/advantages'
import { Decisions } from '@/widgets/decisions'

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
      <ClientCases />
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm variant="secondary" />
      </div>
    </section>
  )
}

export default ProductPage
