'use client'
import { ReactNode, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

type Props = {
  initial: ReactNode
  /**
   * 768px
   */
  md?: ReactNode
}

const MatchMedia = ({ initial, md }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const desktopComponent = md ?? initial
  return <>{isDesktop ? desktopComponent : initial}</>
}

export const AdaptiveBox = (props: Props) => {
  const { initial, md } = props
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return <>{isMounted ? <MatchMedia initial={initial} md={md} /> : null}</>
}
