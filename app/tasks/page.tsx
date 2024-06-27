import { TaskSolvers } from '@/widgets/task-solvers'
import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'
import { IssueSolutionList } from '@/widgets/issue-solution-list'

const TasksPage = () => {
  return (
    <section>
      <div>
        <TaskSolvers />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <IssueSolutionList />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <OurTeam />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <ApplicationForm />
      </div>
    </section>
  )
}

export default TasksPage
