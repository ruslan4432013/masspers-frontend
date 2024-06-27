import { ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  mobile: ReactNode
  desktop: ReactNode
  className?: string
}

export const Responsive = (props: Props) => {
  const { desktop, mobile, className } = props
  return (
    <>
      <div className={cn(className, 'md:hidden')}>{mobile}</div>
      <div className={cn(className, 'hidden md:block')}>{desktop}</div>
    </>
  )
}
