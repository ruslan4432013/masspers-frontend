import s from './client-cases.module.scss'
import { useState } from 'react'
import { CaseItem } from '@/entities/case/ui/case-item'
import { CaseDTO } from '@/shared/api/get-cases'

type Props = {
  cases: CaseDTO[]
  value: CaseDTO
  onChange: (value: CaseDTO) => void
}

export const ClientCaseList = ({ cases, onChange, value }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  return (
    <div className={s.client_cases__previews}>
      {cases.map((el) => (
        <CaseItem
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          key={el.Task}
          image={el.Capture}
          value={el}
          isActive={value === el}
          onClickIcon={onChange}
        />
      ))}
    </div>
  )
}
