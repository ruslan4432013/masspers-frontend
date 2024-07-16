import { ReactNode, Ref } from 'react'
import cn from 'classnames'
import s from './button.module.scss'
import Link from 'next/link'
import { LinkProps } from 'next/dist/client/link'

export type ButtonVariants = 'primary' | 'secondary'

type Props = LinkProps & {
  variant?: ButtonVariants
  className?: string
  children?: ReactNode
  anchorRef?: Ref<HTMLAnchorElement>
}
export const ButtonLink = (props: Props) => {
  const {
    className,
    children,
    variant = 'primary',
    anchorRef,
    ...other
  } = props
  return (
    <Link
      ref={anchorRef}
      className={cn(s.button, className, {
        [s.primary]: variant === 'primary',
        [s.secondary]: variant === 'secondary',
      })}
      {...other}
    >
      {children}
    </Link>
  )
}
