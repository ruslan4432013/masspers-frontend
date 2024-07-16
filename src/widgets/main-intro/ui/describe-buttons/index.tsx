'use client'

import { useState } from 'react'
import { URLS } from '@/shared/config/urls'
import { DescribeButton } from '@/shared/ui/describe-button'

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
      <DescribeButton
        title={'Признание'}
        className={
          'absolute left-[31px] md:top-[30px] lg:-top-[110px] lg:left-0'
        }
        description={'Отсутствие жалоб на спам со стороны получателей 1'}
        isActive={activeItem === 0}
        onClick={handleToggle(0)}
        href={URLS.PRODUCT}
      />
      <DescribeButton
        title={'Безопасность'}
        className={
          'absolute right-[31px] top-[100px] md:top-[30px] md:right-[60px] lg:-top-[44px]'
        }
        description={'Отсутствие жалоб на спам со стороны получателей 2'}
        isActive={activeItem === 1}
        onClick={handleToggle(1)}
        href={URLS.PRODUCT}
      />
      <DescribeButton
        title={'Доходы и прибыль'}
        className={
          'absolute left-[31px] top-[200px] md:left-0 md:top-[140px] lg:top-[50px]'
        }
        description={'Отсутствие жалоб на спам со стороны получателей 3'}
        isActive={activeItem === 2}
        onClick={handleToggle(2)}
        href={URLS.PRODUCT}
      />
      <DescribeButton
        title={'Комфорт'}
        className={
          'absolute right-[31px] top-[300px] md:left-0 md:right-auto md:top-[400px] lg:top-[240px] lg:left-[30px]'
        }
        description={'Отсутствие жалоб на спам со стороны получателей 4'}
        isActive={activeItem === 3}
        onClick={handleToggle(3)}
        href={URLS.PRODUCT}
      />
      <DescribeButton
        title={'Стабильность'}
        className={
          'absolute left-[31px] top-[400px] md:left-auto md:right-[70px] md:top-[450px] lg:top-[300px] lg:right-[30px]'
        }
        description={'Отсутствие жалоб на спам со стороны получателей 5'}
        isActive={activeItem === 4}
        onClick={handleToggle(4)}
        href={URLS.PRODUCT}
      />
    </div>
  )
}
