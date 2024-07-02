import { SelectButtons } from './select-buttons'
import React, { Suspense } from 'react'
import s from './case-stages.module.scss'
import { StagesSelectorWrapper } from './stages-selector-wrapper'
import { StageItemsPersonalization } from './stage-items-personalization'

export const CaseStages = async () => {
  return (
    <div className={s.case_stages}>
      <div className={s.case_stages__select_buttons_container}>
        <Suspense>
          <SelectButtons />
        </Suspense>
      </div>

      <div className={s.case_stages__stage_selector_container}>
        <Suspense>
          <StagesSelectorWrapper
            className={s.case_stages__stage_selector_wrapper}
          />
        </Suspense>
      </div>

      <div className={s.case_stages__stage_items_container}>
        <Suspense>
          <StageItemsPersonalization />
        </Suspense>
      </div>
    </div>
  )
}
