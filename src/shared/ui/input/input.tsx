import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import s from './input.module.scss'

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Input = (props: Props) => {
  const { className, ...other } = props
  return <input className={cn(s.input, className)} {...other} />
}
