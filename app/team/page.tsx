import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'
import { TeamPreview } from '@/widgets/team-preview'
import { Founders } from '@/widgets/founders'

const TeamPage = () => {
  return (
    <section>
      <TeamPreview />
      <div className="mt-[60px] md:mt-[80px]">
        <Founders />
      </div>
      <div className="mt-[68px] md:mt-[80px] xl:mt-[145px]">
        <OurTeam />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm variant="secondary" />
      </div>
    </section>
  )
}

export default TeamPage
