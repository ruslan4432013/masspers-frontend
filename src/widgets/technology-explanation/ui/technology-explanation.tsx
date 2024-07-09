import s from './technology-explanation.module.scss'
import { TechnologyStep } from '@/widgets/technology-explanation/ui/technology-step'
import paper from './paper.svg'
import videoIcon from './videoIcon.svg'

const steps = [
  {
    text: 'Мы получаем обычное презентационное видео как на примере ниже',

    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    text: 'Видео проходит через технологию MassPers. Это всё тот же материал, но теперь он персонализирован через генерацию технологией MassPers для некоего Андрея из некой компании SЖелезоS',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    imageDescription: [
      {
        img: paper,
        description: 'Вы оставляете зявку и ожидаете 2 минуты',
      },
      {
        img: videoIcon,
        description:
          'Вы получаете это же видео, но уже сгенерированное технологией Masspers',
      },
    ],
    text: 'Видео проходит через технологию MassPers. Это всё тот же материал, но теперь он персонализирован через генерацию технологией MassPers для некоего Андрея из некой компании SЖелезоS',
  },
]

export const TechnologyExplanation = () => {
  return (
    <div className={s.technology_explanation}>
      <div className={s.technology_explanation__general_info}>
        <h3 className={s.technology_explanation__title}>
          Как работает Технология
        </h3>
        <p className={s.technology_explanation__text}>
          Технология MassPers является инновационной и уникальной, так как, с
          одной стороны, видео-ролики разного формата и характера захватили умы
          потребителей, а с другой стороны, к потребителю еще никогда не
          обращались лично, от лица ТОП-менеджеров корпораций, зная при этом
          уникальную информацию об адресате. Тем более, видео еще не предлагало
          человеку пообщаться с ним, задавать вопросы и отвечать на них,
          втягивая его в интерактивную игру. Команда Лаборатории рыночных
          Коммуникаций разработало технологию MassPers, которая удивит вашу
          аудиторию в лице как клиентов, так и сотрудников. О, главное, MassPers
          позволит решать вашему бизнесу целевые задачи от области продаж и
          маркетинга до управления персоналом
        </p>
      </div>

      <div className={s.technology_explanation__steps}>
        {steps.map((step, idx) => (
          <TechnologyStep
            key={step.text}
            step={{ ...step, sequence: idx + 1 }}
            variant={idx + 1 === steps.length ? 'secondary' : 'primary'}
          />
        ))}
      </div>
    </div>
  )
}
