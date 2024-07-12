import s from './product-preview.module.scss'
import Image from 'next/image'
import logo from './logo.svg'
import play from './play.png'

export const ProductPreview = () => {
  return (
    <div className={s.product_preview}>
      <div className={s.product_preview__inner}>
        <div className={s.product_preview__left}>
          <div className={s.product_preview__text}>
            <h3 className={s.product_preview__title}>О продукте</h3>
            <Image
              src={logo}
              alt={'masspers logo'}
              className={s.product_preview__logo}
            />
          </div>
          <p className={s.product_preview__subtitle}>
            IT-платформа быстрой генерации видео-сообщений, которые умеют
            приветствовать по имени, общаться с людьми и продавать им
          </p>
        </div>
        <div className={s.product_preview__image_wrapper}>
          <Image
            className={s.product_preview__image}
            src={play}
            alt={'player image'}
          />
        </div>
      </div>
    </div>
  )
}
