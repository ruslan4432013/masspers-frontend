import Image from 'next/image'
import cn from 'classnames'

interface Props {
  previewImg: string
  title: string
  subtitle: string
  date: Date
  className?: string
}

export const NewsSlide = (props: Props) => {
  const { previewImg, title, subtitle, date, className } = props
  return (
    <div
      className={cn(
        className,
        'flex flex-col gap-[22px] pb-[75px] px-[11px] md:pb-0'
      )}
    >
      <div className="rounded-[10px] overflow-hidden aspect-video">
        <Image
          className={'w-full'}
          src={previewImg}
          alt={`Image for news: ${title}`}
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col items-center md:items-start gap-[11px] mt-[22px]">
        <time
          className="text-[#c5c5c5] text-[12px]"
          dateTime={date.toUTCString()}
        >
          {date.toLocaleDateString('ru-RU')}
        </time>
        <p className="text-[22px] font-normal text-primary-500 text-center md:text-start">
          {title}
        </p>
        <p className="text-[16px] text-center md:text-start">{subtitle}</p>
      </div>
    </div>
  )
}
