import { MenuMobile } from './mobile/menu.mobile'
import { MenuDesktop } from './desktop/menu.desktop'
import { AdaptiveBox } from '@/shared/ui/adaptive-box'

export const Menu = () => {
  return <AdaptiveBox initial={<MenuMobile />} md={<MenuDesktop />} />
}
