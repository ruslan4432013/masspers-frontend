import s from './stepper.module.scss'
import { useState } from 'react'
import { Step } from './step'

type StepperProps = {
  steps: string[]
  handleStepChange: (step: string) => void
}

export const Stepper = ({ steps, handleStepChange }: StepperProps) => {
  const [currentOption, setCurrentOption] = useState(steps[0])

  const handleOptionSelection = (step: string) => {
    setCurrentOption(step)
    handleStepChange(step)
  }

  return (
    <div className={s.stepper_container}>
      {steps.map((step) => (
        <Step
          key={step}
          handleOptionSelection={handleOptionSelection}
          step={step}
          active={step === currentOption}
        />
      ))}
    </div>
  )
}
