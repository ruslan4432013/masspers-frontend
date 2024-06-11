import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import s from './select.module.scss'
import cn from 'classnames'

type Props = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

export const Select = (props: Props) => {
  const { className, children, ...other } = props
  return (
    <select {...other} className={cn(s.select, className)}>
      {children}
    </select>
  )
}
