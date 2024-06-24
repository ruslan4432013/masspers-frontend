import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface Props {
  text: string
  image: StaticImport
}

export const SolveItem = ({ text, image }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[28px] md:max-w-[327px]">
      <Image src={image} alt={text} />
      <p className="text-center text-base font-normal text-[#35393a]">{text}</p>
    </div>
  )
}
