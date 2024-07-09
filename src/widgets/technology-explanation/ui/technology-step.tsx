import s from './technology-step.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Input } from '@/shared/ui/input'
import { Select } from '@/shared/ui/select'
import { Button } from '@/shared/ui/button'
import brace from './brace.svg'

type Props = {
  variant?: 'primary' | 'secondary'
  step: {
    sequence: number
    imageDescription?: {
      img: StaticImageData
      description: string
    }[]
    text: string
    video?: string
  }
}

export const TechnologyStep = ({ variant, step }: Props) => {
  const { sequence, imageDescription, text, video } = step

  return (
    <div className={s.technology_step}>
      <div className={s.technology_step__info}>
        <div className={s.technology_step__sequence}>
          <span className={s.technology_step__sequence_num}>{sequence}</span>
          <span className={s.technology_step__sequence_title}>ШАГ</span>
        </div>

        {imageDescription && (
          <div className={s.technology_step__image_description_wrapper}>
            {imageDescription.map((el) => (
              <div
                key={el.description}
                className={s.technology_step__image_description}
              >
                <Image src={el.img} alt={el.description.slice(0, 20)} />
                <p className={s.technology_step__image_description_text}>
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        )}

        <p className={s.technology_step__text}>{text}</p>
      </div>

      {video && (
        <div className={s.technology_step__video_wrapper}>
          <video controls src={video} className={s.technology_step__video} />
        </div>
      )}

      {variant === 'secondary' && (
        <div className={s.technology_step__form_container}>
          <Image
            src={brace}
            alt={'brace'}
            className={s.technology_step__form_brace}
          />

          <div className={s.technology_step__form_wrapper}>
            <Input
              className={s.technology_step__input}
              placeholder={'Как к вам обращаться?'}
            />
            <Input
              className={s.technology_step__input}
              placeholder={'Наименование вашей компании'}
            />
            <Input
              className={s.technology_step__input}
              placeholder={'Ваш контактный телефон'}
            />
            <Select defaultValue={''} className={s.technology_step__select}>
              <option
                value=""
                disabled
                className={s.technology_step__select_option_hidden}
              >
                Отрасль вашего бизнеса
              </option>
              <option value="small">Малый бизнес</option>
              <option value="big">Большой бизнес</option>
            </Select>
          </div>
          <Button className={s.technology_step__form_button}>
            Свяжитесь со мной
          </Button>
        </div>
      )}
    </div>
  )
}
