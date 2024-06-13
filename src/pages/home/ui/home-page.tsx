import { MainIntro } from '@/widgets/main-intro'
import { ClientCases } from '@/widgets/client-cases'
import { OurTeam } from '@/widgets/our-team'
import { TaskSolvers } from '@/widgets/task-solvers/ui'
import { ApplicationForm } from '@/widgets/application-form'
import NewsPaper from '@/widgets/news-paper'

const HomePage = () => {
  return (
    <main>
      <MainIntro />
      <ClientCases />
      <OurTeam />
      <div className="mt-[60px]">
        <TaskSolvers />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm />
      </div>
      <div className="mt-[60px]">
        <NewsPaper />
      </div>
    </main>
  )
}

export default HomePage
