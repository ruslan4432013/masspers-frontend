import s from './footer.module.scss'
import Link from 'next/link'
import { Logo } from '@/shared/ui/logo'
import { Button } from '@/shared/ui/button'
import { FacebookIcon } from '@/widgets/footer/ui/social-media-logos/facebook-icon'
import { TelegramIcon } from '@/widgets/footer/ui/social-media-logos/telegram-icon'
import { VkIcon } from '@/widgets/footer/ui/social-media-logos/vk-icon'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div>
          <div className={s.logo}>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <p className={s.phone}>+7 (843) 111-11-11</p>
          <p className={s.mail}>mail@gmail.com</p>
        </div>
        <nav className={s.links_wrapper}>
          <ul className={s.links}>
            <li>Продукты</li>
            <li>Кейсы</li>
            <li>Задачи</li>
            <li>Наша команда</li>
            <li>Блог</li>
          </ul>
          <ul className={s.links}>
            <li>Заявка</li>
            <li>Контакты</li>
          </ul>
        </nav>
        <div className={s.meta}>
          <Link href={'/'} className={s.order_button_wrapper}>
            <Button>Оставить заявку</Button>
          </Link>
          <div className={s.contacts}>
            <p className={s.contact_title}>Контакты</p>
            <div className={s.contact_subtitle}>
              <p>Москва Варшавское шоссе, дом 37а, стр 8, офис 12</p>
              <p>Пн-Пт с 10:00 до 19:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.meta_links}>
          <Link href={'/'}>Политика конфиденциальности</Link>
          <Link href={'/'}>Разработка сайта</Link>
        </div>
        <div className={s.icons}>
          <Link href={'/'}>
            <FacebookIcon />
          </Link>
          <Link href={'/'}>
            <VkIcon />
          </Link>
          <Link href={'/'}>
            <TelegramIcon />
          </Link>
        </div>
      </div>
    </footer>
  )
}
