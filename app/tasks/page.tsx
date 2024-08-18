'use client'

import { OurTeam } from '@/widgets/our-team'
import { ApplicationForm } from '@/widgets/application-form'
import { IssueSolutionList } from '@/widgets/issue-solution-list'
import { TasksPreview } from '@/widgets/tasks-preview'
import { TasksSolutions } from '@/widgets/tasks-solutions'
import { Worth } from '@/widgets/worth'
import { Suspense, useEffect, useState } from 'react'
import { tasksData, TasksType } from '@/shared/data/tasks'

const TasksPage = () => {
  const departments = Object.keys(tasksData) as (keyof TasksType)[]
  const [currentDepartment, setCurrentDepartment] = useState<keyof TasksType>(
    departments[0]
  )
  const goals = Object.keys(tasksData[currentDepartment].goals)
  const [currentGoals, setCurrentGoals] = useState(goals[0])

  useEffect(() => {
    const newGoals = Object.keys(tasksData[currentDepartment].goals)
    setCurrentGoals(newGoals[0])
  }, [currentDepartment])

  const currentTasks =
    tasksData[currentDepartment].goals[currentGoals]?.tasks || []
  const currentIssueSolutions =
    tasksData[currentDepartment].goals[currentGoals]?.issueSolution || []
  const worth = tasksData[currentDepartment].goals[currentGoals]?.worth || []

  return (
    <section>
      <TasksPreview />
      <div className="mt-[60px] md:mt-[80px] xl:mt-[93px]">
        <TasksSolutions
          departments={departments}
          goals={goals}
          currentDepartment={currentDepartment}
          setCurrentDepartment={setCurrentDepartment}
          currentGoals={currentGoals}
          setCurrentGoals={setCurrentGoals}
          currentTasks={currentTasks}
        />
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <Suspense>
          {currentIssueSolutions && (
            <IssueSolutionList issueSolution={currentIssueSolutions} />
          )}
        </Suspense>
      </div>
      <div className="mt-[60px] md:mt-[80px] xl:mt-[98px]">
        <Suspense>{worth && <Worth worth={worth} />}</Suspense>
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
