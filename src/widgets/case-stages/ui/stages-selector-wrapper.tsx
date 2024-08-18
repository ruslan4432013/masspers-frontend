'use client'
import { SelectSolveType } from '@/features/select-solve-type'

type Props = {
  className?: string
}

export const StagesSelectorWrapper = ({ className }: Props) => {
  return (
    <SelectSolveType
      options={['Мегафон', 'МТС']}
      className={className}
      setCurrentGoals={(option: string) => {
        console.log(option)
      }}
      currentDepartment={''}
      currentGoals={''}
    />
  )
}
