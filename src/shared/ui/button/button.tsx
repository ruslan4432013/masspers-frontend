import { ButtonHTMLAttributes, DetailedHTMLProps, Ref } from 'react'
import cn from 'classnames'
import s from './button.module.scss'

export type ButtonVariants = 'primary' | 'secondary'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: ButtonVariants
  buttonRef?: Ref<HTMLButtonElement>
}
export const Button = (props: Props) => {
  const {
    className,
    children,
    variant = 'primary',
    buttonRef,
    ...other
  } = props
  return (
    <button
      ref={buttonRef}
      className={cn(s.button, className, {
        [s.primary]: variant === 'primary',
        [s.secondary]: variant === 'secondary',
      })}
      {...other}
    >
      {children}
    </button>
  )
}
