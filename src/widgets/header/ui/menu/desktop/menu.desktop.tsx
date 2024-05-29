import s from './menu.desktop.module.scss'
import Link from 'next/link'
import { Logo } from '@/shared/ui/logo'

export const MenuDesktop = () => {
  return (
    <nav className={s.menu_desktop}>
      <Link href="#">
        <Logo />
      </Link>
      <ul className={s.main_nav}>
        <li>
          <Link href={'#'}>Продукт</Link>
        </li>
        <li>
          <Link href={'#'}>Кейсы</Link>
        </li>
        <li>
          <Link href={'#'}>Наша команда</Link>
        </li>
        <li>
          <Link href={'#'}>Заявка</Link>
        </li>
        <li>
          <Link href={'#'}>Блог</Link>
        </li>
        <li>
          <Link href={'#'}>Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}
