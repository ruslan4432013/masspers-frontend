'use client'
import { Logo } from '@/shared/ui/logo'
import s from './menu.mobile.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { Links } from '../links'

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <nav className={cn(s.menu_mobile)}>
      <Link href={'#'}>
        <Logo />
      </Link>
      <div
        onClick={handleToggle}
        className={cn(s.menu_collapsed, {
          [s.menu_expanded]: isOpen,
        })}
      >
        <div className={s.bar}></div>
        <div className={s.menu_mobile__nav}>
          <Links className={s.menu_mobile__links} />
        </div>
      </div>
    </nav>
  )
}
