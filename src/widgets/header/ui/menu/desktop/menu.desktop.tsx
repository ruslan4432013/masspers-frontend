import s from './menu.desktop.module.scss'
import Link from 'next/link'
import { Logo } from '@/shared/ui/logo'
import { Links } from '../links'

export const MenuDesktop = () => {
  return (
    <nav className={s.menu_desktop}>
      <Link href="#">
        <Logo />
      </Link>
      <Links className={s.main_nav} />
    </nav>
  )
}
