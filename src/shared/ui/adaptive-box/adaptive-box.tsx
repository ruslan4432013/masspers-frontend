import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { Property } from 'csstype'

type AdaptiveComponents = {
  byDefault: ReactNode
  /**
   * 768px
   */
  md?: ReactNode
  /**
   * 1024px
   */
  lg?: ReactNode
  /**
   * 1280px
   */
  xl?: ReactNode
}

type Props = {
  component: AdaptiveComponents
  props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  display?: Property.Display
}

export const AdaptiveBox = (props: Props) => {
  const { component, props: boxProps, display } = props
  const { md, xl, lg, byDefault } = component ?? {}
  const { className, ...other } = boxProps ?? {}

  return (
    <>
      <div
        data-display={display}
        className={`${className} md:hidden`}
        {...other}
      >
        {byDefault}
      </div>
      <div
        data-display={display}
        className={`hidden md:block lg:hidden ${className}`}
        {...other}
      >
        {md ?? byDefault}
      </div>
      <div
        data-display={display}
        className={`hidden lg:block xl:hidden ${className}`}
        {...other}
      >
        {lg ?? md ?? byDefault}
      </div>
      <div
        data-display={display}
        className={`hidden xl:block ${className}`}
        {...other}
      >
        {xl ?? lg ?? md ?? byDefault}
      </div>
    </>
  )
}
