'use client'
import s from './describe-button.module.scss'
import playImg from './play.png'
import stopImg from './stop.png'
import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'
import { RedArrow } from '../red-arrow'

type Props = {
  title: string
  description: string
  isActive: boolean
  className?: string
  onClick?: () => void
  href?: string
}
export const DescribeButton = (props: Props) => {
  const { description, title, isActive, className, onClick, href = '#' } = props

  return (
    <div
      onClick={onClick}
      className={cn(s.describe_button, className, {
        [s.describe_button___active]: isActive,
      })}
    >
      <button className={s.describe_button__show_more_button}>
        <Image
          className={cn(s.describe_button__image, s.show_more, {
            [s.show_more___active]: isActive,
          })}
          src={playImg}
          alt={'show more icon'}
        />
        <Image
          className={cn(s.describe_button__image, s.show_less, {
            [s.show_less___active]: isActive,
          })}
          src={stopImg}
          alt={'show less icon'}
        />
      </button>
      <p className="font-medium">{title}</p>
      <div />
      <p
        className={cn(s.describe_button__description, {
          [s.describe_button__description___active]: isActive,
        })}
      >
        <span>{description}</span>
        <Link href={href} className={s.describe_button__link}>
          <span className={s.describe_button__link___decoration}>
            Подробнее
          </span>
          <RedArrow />
        </Link>
      </p>
    </div>
  )
}
