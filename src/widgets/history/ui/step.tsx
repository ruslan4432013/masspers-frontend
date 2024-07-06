import s from './step.module.scss'
import cn from 'classnames'

type StepProps = {
  step: string
  active: boolean
  handleOptionSelection: (option: string) => void
}

export const Step = ({ step, active, handleOptionSelection }: StepProps) => (
  <div className={s.step_container}>
    <div
      className={cn(s.step_container__step, {
        [s.step_container__step_active]: active,
      })}
    >
      {step}
    </div>
    <button
      onClick={() => {
        handleOptionSelection(step)
      }}
    >
      <div
        className={cn(s.step_container__button, {
          [s.step_container__button_active]: active,
        })}
      ></div>
    </button>
  </div>
)
