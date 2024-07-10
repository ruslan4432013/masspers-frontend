'use client'
import s from './client-cases.module.scss'
import { Button } from '@/shared/ui/button'
import { range } from '@/shared/lib/utils/range'
import { useState } from 'react'
import { CaseItem } from '@/entities/case/ui/case-item'

export const ClientCases = () => {
  const [activeElement, setActiveElement] = useState(0)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  return (
    <div className={s.client_cases}>
      <h3 className={s.client_cases__title}>Кейсы наших клиентов</h3>
      <div className={s.client_cases__preview_video}>
        <div className={s.client_cases__preview_wrapper}>
          <div className={s.client_cases__previews}>
            {range(0, 15).map((el) => (
              <CaseItem
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                key={el}
                value={el}
                isActive={activeElement === el}
                onClickIcon={setActiveElement}
              />
            ))}
          </div>
        </div>
        <div className={s.client_cases__right}>
          <div className={s.client_cases__video_wrapper}>
            <video
              controls
              src={
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              }
            />
          </div>
          <Button className={s.client_cases__button}>Смотреть все кейсы</Button>
        </div>
      </div>
    </div>
  )
}
