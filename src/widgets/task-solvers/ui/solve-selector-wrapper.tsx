'use client'
import { SelectSolveType } from '@/features/select-solve-type'

type Props = {
  currentDepartment: string
  goals: string[]
  currentGoals: string
  setCurrentGoals: (option: string) => void
}

export const SolveSelectorWrapper = (props: Props) => {
  const { goals, currentGoals, setCurrentGoals, currentDepartment } = props

  return (
    <SelectSolveType
      options={goals}
      currentGoals={currentGoals}
      setCurrentGoals={setCurrentGoals}
      currentDepartment={currentDepartment}
    />
  )
}
