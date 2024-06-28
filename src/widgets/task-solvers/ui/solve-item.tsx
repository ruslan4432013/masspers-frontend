import Image from 'next/image'

type Props = {
  text: string
  image: string
}

export const SolveItem = ({ text, image }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[28px] md:max-w-[327px]">
      <Image
        src={image}
        alt={text.slice(0, 20)}
        width={80}
        height={100}
        className="w-[86px] aspect-square"
      />
      <p className="text-center text-base font-normal text-[#35393a]">{text}</p>
    </div>
  )
}
