import { Input } from '@/shared/ui/input'
import { Select } from '@/shared/ui/select'
import { Button } from '@/shared/ui/button'
import s from './application-form.module.scss'
import cn from 'classnames'

type Props = {
  variant?: 'primary' | 'secondary'
}

export const ApplicationForm = (props: Props) => {
  const { variant = 'primary' } = props
  const containerClass = cn({
    [s.application_form__container]: variant === 'primary',
    [s.application_form__container__secondary]: variant === 'secondary',
  })
  const wrapperClass = cn({
    [s.application_form__wrapper]: true,
    [s.border_red]: variant === 'secondary',
  })

  return (
    <div className={containerClass}>
      <div className={wrapperClass}>
        <div className={s.application_form__text_wrapper}>
          <h5 className={cn(s.application_form__title, 'text-shadow-custom')}>
            Хотите познакомиться получше?
          </h5>
          <p className={s.application_form__text}>
            Оставьте заявку и наши специалисты расскажут вам, как наша команда и
            наш продукт будут полезны именно вашему бизнесу
          </p>
        </div>
        <div className={s.form__container}>
          <div className={s.form__wrapper}>
            <Input placeholder={'Как к вам обращаться?'} />
            <Input placeholder={'Наименование вашей компании'} />
            <Input placeholder={'Ваш контактный телефон'} />
            <Select defaultValue={''}>
              <option value="" disabled>
                Отрасль вашего бизнеса
              </option>
              <option value="small">Малый бизнес</option>
              <option value="big">Большой бизнес</option>
            </Select>
          </div>
          <Button className={s.form__button}>Свяжитесь со мной</Button>
        </div>
      </div>
    </div>
  )
}
