import s from './solution-item.module.scss'
import { getStaticUrl } from '@/shared/lib/get-static-url'

type Props = {
  text: string
  image: string
}

export const SolutionItem = ({ text, image }: Props) => {
  return (
    <div className={s.solve_item}>
      <div className={s.solve_item__img_container}>
        <img
          src={getStaticUrl(image)}
          alt={text.slice(0, 20)}
          width={100}
          height={100}
          className={s.solve_item__image}
        />
      </div>
      <p className={s.solve_item__text}>{text}</p>
    </div>
  )
}
