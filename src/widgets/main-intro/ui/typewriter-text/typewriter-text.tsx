import s from './typewriter-text.module.scss'

export const TypewriterText = () => {
  return (
    <p className={s.greeting_text}>
      Привет,&nbsp;<span className={s.typewriter}></span>
    </p>
  )
}
