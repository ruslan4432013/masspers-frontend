'use client'
import cn from 'classnames'
import s from './select-solve-type.module.scss'
import { useState } from 'react'
import { Select } from '@/shared/ui/select'

type SelectProps = {
  onChange: (value: string) => void
  value: string
}

const MobileSelect = ({ onChange, value }: SelectProps) => {
  return (
    <Select
      name="solves"
      id="solve-type-select"
      value={value}
      onChange={(e) => {
        onChange(e.currentTarget.value)
      }}
    >
      <option value="attraction">Привлечение</option>
      <option value="sales">Продажи</option>
      <option value="hold">Удержание</option>
      <option value="return">Возвращение</option>
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

const DesktopSelect = ({ onChange, value }: SelectProps) => {
  return (
    <div className="hidden md:flex md:ml-auto md:justify-end md:mr-[15px] xl:mr-[289px]">
      <Tab
        value="attraction"
        text={'Привлечение'}
        onClick={onChange}
        isActive={value === 'attraction'}
      />
      <Tab
        value="sales"
        text={'Продажи'}
        onClick={onChange}
        isActive={value === 'sales'}
      />
      <Tab
        value="hold"
        text={'Удержание'}
        onClick={onChange}
        isActive={value === 'hold'}
      />
      <Tab
        value="return"
        text={'Возвращение'}
        onClick={onChange}
        isActive={value === 'return'}
      />
    </div>
  )
}

export const SelectSolveType = () => {
  const [value, setValue] = useState('attraction')
  return (
    <div>
      <div className={'md:hidden'}>
        <MobileSelect value={value} onChange={setValue} />
      </div>
      <DesktopSelect value={value} onChange={setValue} />
    </div>
  )
}
