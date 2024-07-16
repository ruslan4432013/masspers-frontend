import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'
import { IssueSolutionList } from '@/widgets/issue-solution-list'
import { TasksPreview } from '@/widgets/tasks-preview'
import { TasksSolutions } from '@/widgets/tasks-solutions'
import { getTasks } from '@/shared/api/get-tasks'
import { Worth } from '@/widgets/worth'
import { Suspense } from 'react'

const TasksPage = async () => {
  const tasks = await getTasks()
  return (
    <section>
      <TasksPreview />
      <div className="mt-[60px] md:mt-[80px] xl:mt-[93px]">
        <TasksSolutions />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <Suspense>{tasks && <IssueSolutionList tasksDTO={tasks} />}</Suspense>
      </div>
      <div className="mt-[60px] md:mt-[80px] xl:mt-[98px]">
        <Suspense>{tasks && <Worth tasksDTO={tasks} />}</Suspense>
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
