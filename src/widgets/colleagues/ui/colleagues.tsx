import s from './colleagues.module.scss'
import { Colleague } from '@/entities/colleague/ui/colleague'
import { ColleaguesOverview } from './colleagues-overview'
import golyakov from './golyakov.png'
import chepurnoy from './сhepurnoy.png'
import denisyuk from './denisyuk.png'
import rakhmatov from './rakhmatov.png'
import barilova from './barilova.png'

const colleagues = [
  {
    photo: golyakov,
    name: 'Владислав Голяков',
    post: 'Руководитель отдела разработки, в команде с 2016 года',
    education: {
      institute:
        'Образование: Симферопольский Университет Экономики и Управления',
      yearEnding: 'Год окончания: 2012',
      specialty: 'Специальность: Менеджер организации',
    },
    slogan: 'Девиз: Хочешь сделать — делай, не хочешь — не мешай',
    responsibilities: 'Должностные обязанности: IT-разработка продуктов',
    pride:
      'Профессиональная гордость: Разработка IT- технологии Masspers, Разработка технически- сложного мобильного приложения для Гостиницы «Мрия»',
  },
  {
    photo: chepurnoy,
    name: 'Виктор Чепурной',
    post: 'Руководитель отдела Prodaction, в команде с 2018 года',
    education: {
      institute:
        'Образование: Национальная Академия Природоохранного и Курортного Строительства',
      yearEnding: 'Год окончания: 2009',
      specialty: 'Специальность: Инженер-проектировщик',
    },
    slogan: 'Девиз: Нет ничего невозможного!',
    responsibilities:
      'Должностные обязанности:управление проектами клиентов, разработка коммуникационных стратегий под проекты клиентов, Разработка и контроль видеороликов для клиентов',
    pride:
      'Профессиональная гордость: разработка и сопровождение проектов Masspers для крупного бизнеса, Интенсивный рост интереса Masspers со стороны крупного бизнеса',
  },
  {
    photo: denisyuk,
    name: 'Алина Денисюк',
    post: 'Ассистент Генерального директора, в команде с 2024 года',
    education: {
      institute: 'Образование: Петрозаводский государственный университет',
      yearEnding: 'Год окончания: 2020',
      specialty: 'Специальность: Менеджер по туризму',
    },
    slogan: 'Девиз: Двигаясь за недостижимым, мы совершаем невозможное',
    responsibilities:
      'Должностные обязанности: Управление делами Генерального директора',
    pride:
      'Профессиональная гордость: Участие в дизайн-проектировании суперуспешных и красивых общественных пространств в Петрозаводске: Кинотеатр, кафе «Икигай», кафе «Дело», Школа китайского языка «Ванмэй»',
  },
  {
    photo: rakhmatov,
    name: 'Амир Рахматов',
    post: 'Видеомонтажёр, в команде с 2021 года',
    education: {
      institute: 'Образование: Харьковский Национальный Университет',
      yearEnding: 'Год окончания: 2015',
      specialty: 'Специальнось: Специалист по телекоммуникациям',
    },
    slogan: 'Девиз: Мудрость рождается из опыта!',
    responsibilities: 'Должностные обязанности: Монтаж видеороликов',
    pride:
      'Профессиональная гордость: 10 лет работы на телевидении, Телеканал «Первый Крымский», получил много наград за профессиональную деятельность',
  },
  {
    photo: barilova,
    name: 'Марина Барилова',
    post: 'Руководитель отдела разработки, в команде с 2016 года',
    education: {
      institute:
        'Образование: Севастопольский приборостроительно-технический университет',
      yearEnding: 'Год окончания: 2008',
      specialty: 'Специальность: Инженер-программист',
    },
    slogan: 'Девиз: Чем больше в душе солнца, тем ярче жизнь вокруг',
    responsibilities:
      'Должностные обязанности: Программная разработка проектов',
    pride:
      'Профессиональная гордость: Разработка IT-технологии автоматического анализа биржевых рынков',
  },
]

export const Colleagues = () => {
  return (
    <div className={s.colleagues}>
      <ColleaguesOverview className={s.overview_mobile} />
      <div className={s.colleagues__colleague_wrapper}>
        <ColleaguesOverview className={s.overview_desktop} />
        {colleagues.map((colleague) => (
          <Colleague key={colleague.name} colleague={colleague} />
        ))}
      </div>
    </div>
  )
}
