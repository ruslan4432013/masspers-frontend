'use client'
import { useState } from 'react'
import s from '@/widgets/client-cases/ui/client-cases.module.scss'
import { ClientCaseList } from '@/widgets/client-cases/ui/client-case-list'
import { CaseDTO } from '@/shared/api/get-cases'
import { getStaticUrl } from '@/shared/lib/get-static-url'

type Props = {
  cases: CaseDTO[]
}
export const CaseWrapper = (props: Props) => {
  const { cases } = props

  const [currentCase, setCurrentCase] = useState(cases[0])
  return (
    <>
      <div className={s.client_cases__preview_wrapper}>
        <ClientCaseList
          cases={cases}
          value={currentCase}
          onChange={setCurrentCase}
        />
      </div>
      <div className={s.client_cases__right}>
        <div className={s.client_cases__video_wrapper}>
          <video
            controls
            src={getStaticUrl(
              `https://test-mass.ru/admin/${currentCase.Video}`
            )}
          />
        </div>
      </div>
    </>
  )
}
