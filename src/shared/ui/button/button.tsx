import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import cn from 'classnames'
import s from './button.module.scss'

type Variants = 'primary' | 'secondary'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: Variants
}
export const Button = (props: Props) => {
  const { className, children, variant = 'primary', ...other } = props
  return (
    <button
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
