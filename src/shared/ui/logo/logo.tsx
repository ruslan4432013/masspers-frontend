import { LogoMobile } from './logo.mobile'
import s from './logo.module.scss'
import cn from 'classnames'
import { LogoLaptop } from './logo.laptop'
import { LogoDesktop } from './logo.desktop'

interface Props {
  className?: string
}
export const Logo = ({ className }: Props) => {
  return (
    <>
      <LogoMobile className={cn(s.logo_mobile, className)} />
      <LogoLaptop className={cn(s.logo_laptop, className)} />
      <LogoDesktop className={cn(s.logo_desktop, className)} />
    </>
  )
}
