'use client'
import s from './worth.module.scss'
import { WorthType } from '@/shared/data/tasks'

type Props = {
  worth: WorthType[]
}

export const Worth = ({ worth }: Props) => {
  return (
    <div className={s.worth}>
      <div className={s.worth__point_title}>
        <h3 className={s.worth__point}>Ценность</h3>
        <h4 className={s.worth__title}>
          Какую ценность получает клиент MassPress?
        </h4>
      </div>

      <div className={s.worth__inner__container}>
        {worth.map((value, idx) => (
          <div key={idx} className={s.worth__item__container}>
            <div className={s.img__container}>
              <img
                src={`/worth/${value.image}`}
                alt={value.name.slice(0, 20)}
                width={100}
                height={100}
                className={s.img}
              />
            </div>
            <p className={s.text}>{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
