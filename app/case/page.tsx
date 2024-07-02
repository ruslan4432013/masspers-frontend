import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'
import { CasePreview } from '@/widgets/case-preview'
import { CaseStages } from '@/widgets/case-stages'

const CasePage = () => {
  return (
    <section>
      <CasePreview />
      <div className="mt-[66px] md:mt-[80px] xl:mt-[86px]">
        <CaseStages />
      </div>
      <div className="mt-[60px] md:mt-[80px] xl:mt-[145px]">
        <OurTeam />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm variant="secondary" />
      </div>
    </section>
  )
}

export default CasePage
