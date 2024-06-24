import { SelectCaseOrganisation } from '@/features/select-case-organisation'
import { CasesPreview } from '@/widgets/cases-preview'
import s from './case-page.module.scss'
import { CaseSlides } from '@/widgets/case-slides'
import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'

const Cases = () => {
  return (
    <section>
      <CasesPreview />
      <div className={s.case_page__tabs}>
        <SelectCaseOrganisation />
        <CaseSlides />
      </div>
      <div>
        <OurTeam />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm />
      </div>
    </section>
  )
}

export default Cases
