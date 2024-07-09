import { ApplicationForm } from '@/widgets/application-form'
import { ClientCases } from '@/widgets/client-cases'
import { ProductPreview } from '@/widgets/product-preview'
import { TechnologyExplanation } from '@/widgets/technology-explanation'

const ProductPage = () => {
  return (
    <section>
      <ProductPreview />
      <div className="mt-[60px] md:mt-[80px]">
        <TechnologyExplanation />
      </div>
      <ClientCases />
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm variant="secondary" />
      </div>
    </section>
  )
}

export default ProductPage
