import { SelectSolveType } from '@/features/select-solve-type'

type Props = {
  goals: string[]
  currentDepartment: string
  currentGoals: string
  setCurrentGoals: (option: string) => void
  className?: string
}

export const SolutionSelectorWrapper = (props: Props) => {
  const { goals, currentDepartment, currentGoals, setCurrentGoals, className } =
    props

  return (
    <SelectSolveType
      options={goals}
      className={className}
      currentDepartment={currentDepartment}
      currentGoals={currentGoals}
      setCurrentGoals={setCurrentGoals}
    />
  )
}
