import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'
import { IssueSolutionList } from '@/widgets/issue-solution-list'
import { Worth } from '@/widgets/worth'
import { TasksPreview } from '@/widgets/tasks-preview'
import { TasksSolutions } from '@/widgets/tasks-solutions'

const TasksPage = () => {
  return (
    <section>
      <TasksPreview />
      <div className="mt-[60px] md:mt-[80px] xl:mt-[93px]">
        <TasksSolutions />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <IssueSolutionList />
      </div>
      <div className="mt-[60px] md:mt-[80px] xl:mt-[98px]">
        <Worth />
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

export default TasksPage
