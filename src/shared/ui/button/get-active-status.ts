import { ButtonVariants } from './button'

export const getActiveStatus = (isActive: boolean): ButtonVariants => {
  return isActive ? 'primary' : 'secondary'
}
