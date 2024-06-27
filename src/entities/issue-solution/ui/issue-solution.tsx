import React from 'react'

type Props = {
  issue: string
  solution: string
}

export const IssueSolution = (props: Props) => {
  const { issue, solution } = props
  return (
    <div className="flex flex-col pt-[29px] pb-[32px] border-b-[1px] border-[#D2D2D2] last:border-b-0 md:last:border-b-[1px] md:flex-row gap-[49px] ">
      <span className="text-[16px] leading-[21px] font-normal text-center md:basis-[45%] md:text-start xl:basis-[50%]">
        {issue}
      </span>
      <span className="text-[16px] leading-[21px] font-normal text-center md:basis-[55%] md:text-start xl:basis-[50%]">
        {solution}
      </span>
    </div>
  )
}
