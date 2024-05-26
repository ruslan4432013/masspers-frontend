'use client'
import s from './menu.mobile.module.scss'
import cn from 'classnames'
import { Logo } from './logo'
import Link from 'next/link'
import { useState } from 'react'

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <nav className={cn(s.menu_mobile)}>
      <Logo />
      <div
        onClick={handleToggle}
        className={cn(s.menu_collapsed, {
          [s.menu_expanded]: isOpen,
        })}
      >
        <div className={s.bar}></div>
        <nav className={s.menu_mobile__nav}>
          <ul className={s.menu_mobile__links}>
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
      </div>
    </nav>
  )
}
