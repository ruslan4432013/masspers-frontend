import s from './step.module.scss'
import cn from 'classnames'

type StepProps = {
  step: string
  active: boolean
  handleOptionSelection: (option: string) => void
}

export const Step = ({ step, active, handleOptionSelection }: StepProps) => (
  <div className={s.stepContainer}>
    <div
      className={cn(s.stepContainer__step, {
        [s.stepContainer__step_active]: active,
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
        className={cn(s.stepContainer__button, {
          [s.stepContainer__button_active]: active,
        })}
      ></div>
    </button>
  </div>
)
