'use client'

import { Button } from '@/shared/ui/button'
import { SelectButtons } from './select-buttons'
import { SolveSelectorWrapper } from '@/widgets/task-solvers/ui/solve-selector-wrapper'
import { SolveItems } from '@/widgets/task-solvers/ui/solve-items'
import { Suspense, useEffect, useState } from 'react'
import { tasksData, TasksType } from '@/shared/data/tasks'

export const TaskSolvers = () => {
  const departments = Object.keys(tasksData)
  const [currentDepartment, setCurrentDepartment] = useState(departments[0])
  const goals = Object.keys(
    tasksData[currentDepartment as keyof TasksType].goals
  )
  const [currentGoals, setCurrentGoals] = useState(goals[0])

  useEffect(() => {
    const newGoals = Object.keys(
      tasksData[currentDepartment as keyof TasksType].goals
    )
    setCurrentGoals(newGoals[0])
  }, [currentDepartment])

  const currentTasks =
    tasksData[currentDepartment as keyof TasksType].goals[currentGoals]
      ?.tasks || []

  return (
    <div className="flex flex-col items-center justify-center w-full px-[10px] md:items-start md:px-[20px] xl:container">
      <div className="md:flex md:gap-[50px] md:justify-start xl:justify-end gap-[89px]">
        <Suspense>
          <SelectButtons
            departments={departments}
            currentDepartment={currentDepartment}
            setCurrentDepartment={setCurrentDepartment}
          />
        </Suspense>
      </div>
      <div className="mt-[39px] w-full">
        <Suspense>
          <SolveSelectorWrapper
            currentDepartment={currentDepartment}
            goals={goals}
            currentGoals={currentGoals}
            setCurrentGoals={setCurrentGoals}
          />
        </Suspense>
      </div>

      <div className="border border-primary-500 px-[10px] pt-[65px] pb-[48px] flex flex-col items-center justify-center gap-[30px] rounded-[10px] mt-[31px] md:mt-0 md:gap-[40px] md:w-full">
        <Suspense>
          <SolveItems tasks={currentTasks} />
        </Suspense>
        <Button className="w-full uppercase md:w-auto">
          Подробнее об удержании в продажах
        </Button>
      </div>
    </div>
  )
}
