'use client'
import s from './client-cases.module.scss'
import previewImage from './video-preview.png'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { range } from '@/shared/lib/utils/range'
import { useState } from 'react'
import cn from 'classnames'

export const ClientCases = () => {
  const [activeElement, setActiveElement] = useState(0)

  const handleClickIcon = (el: number) => () => {
    setActiveElement(el)
  }

  return (
    <div className={s.client_cases}>
      <h3 className={s.client_cases__title}>Кейсы наших клиентов</h3>
      <div className={s.client_cases__preview_video}>
        <div className={s.client_cases__preview_wrapper}>
          <div className={s.client_cases__previews}>
            {range(0, 15).map((el) => (
              <button
                key={el}
                onClick={handleClickIcon(el)}
                className={cn(s.client_cases__preview_button, {
                  [s.client_cases__preview_button___active]:
                    activeElement === el,
                })}
              >
                <Image
                  src={previewImage}
                  className={s.client_cases__preview}
                  alt={'Preview Image'}
                />
              </button>
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
