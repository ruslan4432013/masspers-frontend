import s from './options-personalization.module.scss'
import { PersonalizationItem } from './personalization-item'
import person from './person.png'
import hands from './hands.png'
import wallet from './wallet.png'

const personalizationItems = [
  {
    image: person,
    description: 'Имя абонента',
  },
  {
    image: hands,
    description: 'Персональное предложение зависящее от текущего тарифа',
  },
  {
    image: wallet,
    description: 'Стоимость персонального тарифного плана',
  },
]

export const OptionsPersonalization = () => {
  return (
    <div className={s.options_personalization}>
      <h4 className={s.options_personalization__title}>
        Параметры персонализации
      </h4>
      <div className={s.options_personalization__items}>
        {personalizationItems.map((item) => (
          <PersonalizationItem
            key={item.image + item.description}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}
