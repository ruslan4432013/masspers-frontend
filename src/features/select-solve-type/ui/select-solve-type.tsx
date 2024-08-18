import cn from 'classnames'
import s from './select-solve-type.module.scss'
import { useEffect } from 'react'
import { Select } from '@/shared/ui/select'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { SOLVE_KEY } from '@/entities/tasks/tasks.constants'
import { tasksData, TasksType } from '@/shared/data/tasks'

type SelectProps = {
  onChange: (value: string) => void
  value: string
  options: string[]
  className?: string
  currentDepartment?: string
}

const MobileSelect = ({
  onChange,
  value,
  options,
  currentDepartment,
}: SelectProps) => {
  return (
    <Select
      name="solves"
      id="solve-type-select"
      value={value}
      onChange={(e) => {
        onChange(e.currentTarget.value)
      }}
    >
      {options.map((el) => (
        <option key={el} value={el}>
          {tasksData[currentDepartment as keyof TasksType].goals[el].title}
        </option>
      ))}
    </Select>
  )
}

type TabProps = {
  text: string
  value: string
  isActive?: boolean
  onClick: (value: string) => void
}

const Tab = ({ text, isActive, onClick, value }: TabProps) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={cn(
        'py-[16px] px-[20px] text-[#35393a] border border-transparent uppercase text-base font-normal relative -bottom-[1.5px] md:border-b-0',
        {
          [s.active_button]: isActive,
        }
      )}
    >
      {text}
    </button>
  )
}

const DesktopSelect = ({
  onChange,
  value,
  options,
  className,
  currentDepartment,
}: SelectProps) => {
  return (
    <div className={cn(s.desktop_select, className)}>
      {options.map((el) => (
        <Tab
          key={el}
          isActive={value === el}
          text={tasksData[currentDepartment as keyof TasksType].goals[el].title}
          value={el}
          onClick={onChange}
        />
      ))}
    </div>
  )
}

type Props = {
  options: string[]
  className?: string
  currentDepartment: string
  currentGoals: string
  setCurrentGoals: (option: string) => void
}

export const SelectSolveType = (props: Props) => {
  const {
    options,
    className,
    currentDepartment,
    currentGoals,
    setCurrentGoals,
  } = props

  const queryParams = useCustomSearchParams()
  const queryValue = queryParams.get(SOLVE_KEY)

  const handleChange = (newValue: string) => {
    queryParams.set(SOLVE_KEY, newValue)
  }

  useEffect(() => {
    if (queryValue !== options[0]) {
      handleChange(options[0])
    }
  }, [options.join(',')])

  if (!queryValue) {
    return <div />
  }

  return (
    <div>
      <div className={'md:hidden'}>
        <MobileSelect
          currentDepartment={currentDepartment}
          options={options}
          value={currentGoals}
          onChange={setCurrentGoals}
        />
      </div>
      <DesktopSelect
        currentDepartment={currentDepartment}
        options={options}
        value={currentGoals}
        onChange={setCurrentGoals}
        className={className}
      />
    </div>
  )
}
