import s from './founders.module.scss'
import { Founder } from '@/entities/founder'
import ilya from './ilya.png'
import alex from './alex.png'

const foundersData = [
  {
    name: 'Илья Бугаев',
    who: 'сооснователь ЛРК',
    education:
      'Образование: Донецкий Национальный Университет\n' +
      'Год окончания: 2006 с Красным дипломом\n' +
      'Специальность: Архитектор бизнес-процессов',
    inTeam:
      'В команде с: 2012 года\n' +
      'Должность: Генеральный Директор\n' +
      'Девиз: Иди и делай!\n',
    responsibilities:
      'Должностные обязанности: Коммерческое развитие проекта, маркетинг',
    pride:
      'Профессиональная гордость: IT-Технология Masspers, вывод ЛРК и Masspers на государственный уровень',
    photo: ilya,
  },
  {
    name: 'Алексей Бугаев',
    who: 'сооснователь ЛРК',
    education:
      'Образование: Национальная Академия Природоохранного и Курортного Строительства\n' +
      'Год окончания: 2009 с Красным дипломом\n' +
      'Специальность: Инженер-проектировщик',
    inTeam:
      'В команде с: 2012 года\n' +
      'Должность: Технический директор\n' +
      'Девиз: Нет ничего невозможного!',
    responsibilities:
      'Должностные обязанности: Техническое развитие проекта и технологий',
    pride: 'Профессиональная гордость: IT-Технология Masspers',
    photo: alex,
  },
]

export const Founders = () => {
  return (
    <div className={s.founders}>
      <div className={s.founders__top}>
        <h3 className={s.founders__point}>Основатели</h3>
        <h4 className={s.founders__title}>Кто стоит у истоков?</h4>
      </div>

      <div className={s.founders__inner}>
        {foundersData.map((f, idx) => (
          <Founder
            key={idx + f.name}
            name={f.name}
            who={f.who}
            education={f.education}
            inTeam={f.inTeam}
            responsibilities={f.responsibilities}
            pride={f.pride}
            photo={f.photo}
          />
        ))}
      </div>
    </div>
  )
}
