import { useMediaQuery } from 'usehooks-ts'

export const useIsMobile = () => {
  return useMediaQuery('(max-width: 767px)')
}

export const useIsDesktop = () => {
  return useMediaQuery('(min-width: 768px)')
}
