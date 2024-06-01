'use client'

import { ButtonWrapper } from './button-wrapper'
import { useState } from 'react'

export const DescribeButtons = () => {
  const [activeItems, setActiveItems] = useState<boolean[]>([])

  const handleToggle = (index: number) => () => {
    setActiveItems((prevState) => {
      const newState = prevState.map((el) => el)
      newState[index] = !newState[index]
      for (let i = 0; i < newState.length; i++) {
        if (i !== index) {
          newState[i] = false
        }
      }
      return newState
    })
  }

  const activeItem = activeItems.findIndex((el) => el)

  return (
    <div className="absolute top-0 left-0 w-full">
      <ButtonWrapper
        title={'Признание'}
        className={'absolute left-[31px]'}
        description={'Отсутствие жалоб на спам со стороны получателей'}
        isActive={activeItem === 0}
        onClick={handleToggle(0)}
      />
      <ButtonWrapper
        title={'Безопасность'}
        className={'absolute right-[31px] top-[100px]'}
        description={'Отсутствие жалоб на спам со стороны получателей'}
        isActive={activeItem === 1}
        onClick={handleToggle(1)}
      />
      <ButtonWrapper
        title={'Доходы и прибыль'}
        className={'absolute left-[31px] top-[200px]'}
        description={'Отсутствие жалоб на спам со стороны получателей'}
        isActive={activeItem === 2}
        onClick={handleToggle(2)}
      />
      <ButtonWrapper
        title={'Стабильность'}
        className={'absolute right-[31px] top-[300px]'}
        description={'Отсутствие жалоб на спам со стороны получателей'}
        isActive={activeItem === 3}
        onClick={handleToggle(3)}
      />
      <ButtonWrapper
        title={'Стабильность'}
        className={'absolute left-[31px] top-[400px]'}
        description={'Отсутствие жалоб на спам со стороны получателей'}
        isActive={activeItem === 4}
        onClick={handleToggle(4)}
      />
    </div>
  )
}
