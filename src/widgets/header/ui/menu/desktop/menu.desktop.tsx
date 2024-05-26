import s from './menu.desktop.module.scss'
import { LaptopLogo } from './laptop.logo'
import { DesktopLogo } from './desktop.logo'
import Link from 'next/link'

export const MenuDesktop = () => {
  return (
    <nav className={s.menu_desktop}>
      <Link href="#">
        <LaptopLogo className={s.laptop_logo} />
        <DesktopLogo className={s.desktop_logo} />
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
