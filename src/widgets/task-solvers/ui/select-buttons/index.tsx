'use client'
import { Button } from '@/shared/ui/button'
import { useState } from 'react'

type Value = 'solves' | 'marketing' | 'staff'

const variantFor = (isActive: boolean) => {
  if (isActive) {
    return 'primary'
  }
  return 'secondary'
}

export const SelectButtons = () => {
  const [value, setValue] = useState<Value>('solves')

  const handleChange = (newValue: Value) => () => {
    setValue(newValue)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-[8px] mt-[40px] md:flex-row md:items-start md:mt-0 xl:items-end xl:justify-start">
      <Button
        className="w-full md:w-fit"
        variant={variantFor(value === 'solves')}
        onClick={handleChange('solves')}
      >
        Продажи
      </Button>
      <Button
        className="w-full md:w-fit"
        variant={variantFor(value === 'marketing')}
        onClick={handleChange('marketing')}
      >
        Маркетинг
      </Button>
      <Button
        className="w-full md:w-fit"
        variant={variantFor(value === 'staff')}
        onClick={handleChange('staff')}
      >
        Кадры
      </Button>
    </div>
  )
}
