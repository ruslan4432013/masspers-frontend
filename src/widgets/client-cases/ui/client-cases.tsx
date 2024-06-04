import s from './client-cases.module.scss'
import previewImage from './video-preview.png'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'

export const ClientCases = () => {
  return (
    <div className={s.client_cases}>
      <h3 className={s.client_cases__title}>Кейсы наших клиентов</h3>
      <div className={s.client_cases__preview_video}>
        <div className={s.client_cases__preview_wrapper}>
          <div className={s.client_cases__previews}>
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
            <Image
              src={previewImage}
              className={s.client_cases__preview}
              alt={'Preview Image'}
            />
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
