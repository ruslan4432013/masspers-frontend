'use client'
import cn from 'classnames'
import s from './select-solve-type.module.scss'
import { useEffect } from 'react'
import { Select } from '@/shared/ui/select'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { SOLVE_KEY } from '@/entities/tasks/tasks.constants'

type SelectProps = {
  onChange: (value: string) => void
  value: string
  options: string[]
  justifyStart?: boolean
}

const MobileSelect = ({ onChange, value, options }: SelectProps) => {
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
          {el}
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
  justifyStart = false,
}: SelectProps) => {
  return (
    <div
      className={cn(s.desktop_select, {
        [s.desktop_select__justify_start]: justifyStart,
      })}
    >
      {options.map((el) => (
        <Tab
          key={el}
          isActive={value === el}
          text={el}
          value={el}
          onClick={onChange}
        />
      ))}
    </div>
  )
}

type Props = {
  options: string[]
  justifyStart?: boolean
}

export const SelectSolveType = ({ options, justifyStart }: Props) => {
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
          options={options}
          value={queryValue}
          onChange={handleChange}
        />
      </div>
      <DesktopSelect
        options={options}
        value={queryValue}
        onChange={handleChange}
        justifyStart={justifyStart}
      />
    </div>
  )
}
