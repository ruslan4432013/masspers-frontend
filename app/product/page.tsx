import { ApplicationForm } from '@/widgets/application-form'
import { ClientCases } from '@/widgets/client-cases'
import { ProductPreview } from '@/widgets/product-preview'

const ProductPage = () => {
  return (
    <section>
      <ProductPreview />
      <ClientCases />
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm variant="secondary" />
      </div>
    </section>
  )
}

export default ProductPage
