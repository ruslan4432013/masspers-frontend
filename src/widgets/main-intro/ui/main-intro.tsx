import Image from 'next/image'
import masspersLogo from './masspers-logo.png'
import playerImg from './player.png'
import s from './main-intro.module.scss'
import { Button } from '@/shared/ui/button'
import { DescribeButtons } from './describe-buttons'
import { TypewriterText } from './typewriter-text'

export const MainIntro = () => {
  return (
    <div className={s.main_intro}>
      <div className={s.main_intro__inner}>
        <div className={s.main_intro__left}>
          <Image className={s.logo} src={masspersLogo} alt={'masspers logo'} />
          <h2 className={s.title}>
            Инновационная <span className={s.in_title}>IT-технология</span>
          </h2>
          <p className={s.subtitle}>
            эффективной коммуникации с рынком для крупного бизнеса
          </p>
          <p className={s.description}>
            Быстрая генерация видео-сообщений, которые умеют общаться с
            адресатом
          </p>
          <Button className={s.button}>Как это работает</Button>
        </div>
        <div className={s.interactive}>
          <div className={s.image_wrapper}>
            <Image src={playerImg} alt={'player image'} />
            <TypewriterText />
          </div>
          <DescribeButtons />
        </div>
      </div>
    </div>
  )
}
