import s from './introduction-step.module.scss'

type Props = {
  step: {
    stepNumber: number
    title: string
    text: string
  }
}

export const IntroductionStep = ({ step }: Props) => {
  const { stepNumber, title, text } = step

  return (
    <div className={s.introduction_step}>
      <span className={s.introduction_step__number}>{stepNumber}</span>
      <h5 className={s.introduction_step__title}>{title}</h5>
      <p className={s.introduction_step__text}>{text}</p>
    </div>
  )
}
