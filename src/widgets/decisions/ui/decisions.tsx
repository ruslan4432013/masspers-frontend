import s from './decisions.module.scss'
import increaseImage from './increase.svg'
import badgeImage from './badge.svg'
import shieldImage from './shield.svg'
import personImage from './person.svg'
import { Decision, DecisionType } from '@/entities/decision'

const decisions: DecisionType[] = [
  {
    image: increaseImage,
    title: 'Рост показателей',
    text: 'Эффективность MassPers выше других технологий на 5-10%',
  },
  {
    image: badgeImage,
    title: 'Репутация',
    text: 'Masspers вызывает ВАУ-эффект, а ваша компания становится инновационной',
  },
  {
    image: shieldImage,
    title: 'Безопасность',
    text: 'Ваши клиенты не блокируют ваши коммуникации, как спам, наоборот признают вас',
  },
  {
    image: personImage,
    title: 'Разгрузка',
    text:
      'Ваши специалисты по коммуникациям разгружаются на 80% и работают \n' +
      'эффективнее',
  },
]

export const Decisions = () => {
  return (
    <div className={s.decisions}>
      <h3 className={s.decisions__title}>Какие задачи вы решите с MassPers?</h3>

      <div className={s.decisions__wrapper}>
        {decisions.map((decision) => (
          <Decision key={decision.title} decision={decision} />
        ))}
      </div>
    </div>
  )
}
