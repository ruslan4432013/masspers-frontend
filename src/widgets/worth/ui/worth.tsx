import Image from 'next/image'
import s from './worth.module.scss'

import dialog from '@/widgets/worth/ui/temp-img/dialog.png'
import crown from '@/widgets/worth/ui/temp-img/crown.png'
import paper from '@/widgets/worth/ui/temp-img/paper.png'
import handshake from '@/widgets/worth/ui/temp-img/handshake.png'
import documents from '@/widgets/worth/ui/temp-img/documents.png'
import clock from '@/widgets/worth/ui/temp-img/clock.png'

const worth = [
  {
    image: dialog,
    text: 'Моментальная связь с каждым клиентом',
  },
  {
    image: crown,
    text: 'Повышение уровня клиентского сервиса',
  },
  {
    image: paper,
    text: 'Увеличение среднего чека',
  },
  {
    image: handshake,
    text: 'Доверительное отношение с абсолютно каждым клиентом (никто не потерян, никто не забыт)',
  },
  {
    image: documents,
    text: 'Простой, быстрый способ сбора прямой обратной связи о работе компании от клиентов',
  },
  {
    image: clock,
    text: 'Ускоренный рост положительной репутации на рынке',
  },
]

export const Worth = () => {
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
              <Image
                src={value.image}
                alt={value.text.slice(0, 20)}
                width={100}
                height={100}
                className={s.img}
              />
            </div>
            <p className={s.text}>{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
