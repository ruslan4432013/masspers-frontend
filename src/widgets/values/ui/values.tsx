import Image from 'next/image'
import s from './values.module.scss'

import dialog from '@/widgets/values/ui/temp-img/dialog.png'
import crown from '@/widgets/values/ui/temp-img/crown.png'
import paper from '@/widgets/values/ui/temp-img/paper.png'
import handshake from '@/widgets/values/ui/temp-img/handshake.png'
import documents from '@/widgets/values/ui/temp-img/documents.png'
import clock from '@/widgets/values/ui/temp-img/clock.png'

const values = [
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

export const Values = () => {
  return (
    <div className={s.values}>
      <div className={s['values_point-title']}>
        <h3 className={s.values_point}>Ценность</h3>
        <h4 className={s.values_title}>
          Какую ценность получает клиент MassPress?
        </h4>
      </div>

      <div className={s.values_inner__container}>
        {values.map((value, idx) => (
          <div key={idx} className={s.value_container}>
            <div className={s.img_container}>
              <Image
                src={value.image}
                alt={value.text.slice(0, 20)}
                width={80}
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
