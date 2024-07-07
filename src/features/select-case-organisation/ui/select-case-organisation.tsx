'use client'

import { Button, getActiveStatus } from '@/shared/ui/button'
import { useState } from 'react'
import s from './select-case-organisation.module.scss'

type Values = 'telecom' | 'state' | 'education' | 'auto' | 'bank'

export const SelectCaseOrganisation = () => {
  const [activeTab, setActiveTab] = useState<Values>('telecom')

  const handleSelect = (value: Values) => () => {
    setActiveTab(value)
  }

  return (
    <div className={s.select_case_organisation}>
      <Button
        onClick={handleSelect('telecom')}
        variant={getActiveStatus(activeTab === 'telecom')}
      >
        ТЕЛЕКОМ
      </Button>
      <Button
        onClick={handleSelect('state')}
        variant={getActiveStatus(activeTab === 'state')}
      >
        ГОСУДАРСТВО
      </Button>
      <Button
        onClick={handleSelect('education')}
        variant={getActiveStatus(activeTab === 'education')}
      >
        ОБРАЗОВАНИЕ
      </Button>
      <Button
        onClick={handleSelect('auto')}
        variant={getActiveStatus(activeTab === 'auto')}
      >
        АВТО
      </Button>
      <Button
        onClick={handleSelect('bank')}
        variant={getActiveStatus(activeTab === 'bank')}
      >
        БАНКИ
      </Button>
    </div>
  )
}
