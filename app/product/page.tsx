import { ApplicationForm } from '@/widgets/application-form'
import { ClientCases } from '@/widgets/client-cases'
import { ProductPreview } from '@/widgets/product-preview'
import { TechnologyExplanation } from '@/widgets/technology-explanation'
import { Conversion } from '@/widgets/conversion'

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
      <ClientCases />
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm variant="secondary" />
      </div>
    </section>
  )
}

export default ProductPage
