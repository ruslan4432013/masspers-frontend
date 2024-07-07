import Link from 'next/link'

type Props = {
  className?: string
}

export const Links = ({ className }: Props) => {
  return (
    <ul className={className}>
      <li>
        <Link href={'/'}>Продукт</Link>
      </li>
      <li>
        <Link href={'/cases'}>Кейсы</Link>
      </li>
      <li>
        <Link href={'/team'}>Наша команда</Link>
      </li>
      <li>
        <Link href={'/tasks'}>Задачи</Link>
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
  )
}
