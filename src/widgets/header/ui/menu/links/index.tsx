import Link from 'next/link'
import { URLS } from '@/shared/config/urls'

type Props = {
  className?: string
}

export const Links = ({ className }: Props) => {
  return (
    <ul className={className}>
      <li>
        <Link href={URLS.PRODUCT}>Продукт</Link>
      </li>
      <li>
        <Link href={URLS.CASES}>Кейсы</Link>
      </li>
      <li>
        <Link href={URLS.TEAM}>Наша команда</Link>
      </li>
      <li>
        <Link href={URLS.TASKS}>Задачи</Link>
      </li>
      <li>
        <Link href={'#'}>Заявка</Link>
      </li>
      <li>
        <Link href={'#'}>Блог</Link>
      </li>
      <li>
        <Link href={URLS.CONTACTS}>Контакты</Link>
      </li>
    </ul>
  )
}
