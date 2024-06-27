import React from 'react'
import { TaskSolvers } from '@/widgets/task-solvers'
import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'

const Tasks = () => {
  return (
    <section>
      <div>
        <TaskSolvers />
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

export default Tasks
