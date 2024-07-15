import s from './advantages.module.scss'
import { AdvantageType } from './advantages.type'
import { AdvantageMobile } from './advantage-mobile'
import { AdvantageDesktop } from './advantage-desktop'

const advantages: AdvantageType[] = [
  {
    title: 'Masspers',
    text: 'Доставка через сооvще',
    prosAndCons: [
      {
        sign: 'plusMinus',
        description:
          'Сообщение через смс или мессенджер с ссылкой на сайт, вызывающее подозрение. Важен текст сообщения и отправитель',
      },
      {
        sign: 'plus',
        description:
          'Адресат может открыть видео, пройдя по ссылке, в любой момент. Тем самым сообщение не теряется, если он занят',
      },
      {
        sign: 'plus',
        description:
          'Профессионально срежессированное и снятое видео, которое привлекает интерес',
      },
      {
        sign: 'plus',
        description:
          'Видео с личным обращением к адресату от должностного лица, что вызывает ВАУ-эффект. При этом должностное лицо говорит про индивидуальные моменты жизни адресата, а видео строится исходя из его ответов',
      },
      {
        sign: 'plus',
        description:
          'Кнопка целевого действия встроена прямо в видео, что позволяет адресату, не совершая лишних действий, сразу совершить необходимое действие, в котором его заинтересовали',
      },
    ],
    totalInfo: {
      plus: 4,
      plusMinus: 1,
      minus: 0,
      text: 'Коэффициент полезности Masspers: 5',
    },
  },
  {
    title: 'Голосовые роботы',
    text: 'Доставка через зввонок',
    prosAndCons: [
      {
        sign: 'plus',
        description:
          'Звонок с незнакомого номера телефона, вызывающее подозрение. Но, в большинстве, люди на них отвечают',
      },
      {
        sign: 'minus',
        description:
          'Если адресат занят во время поступления звонка, то он его сбросит. Цель звонка не достигнута. Повторный звонок может быть воспринят, как навязчивый',
      },
      {
        sign: 'minus',
        description:
          'Спам-звонки, которые, в большинстве случаев, у потребителя вызывают отторжение',
      },
      {
        sign: 'plusMinus',
        description:
          'Звонок с обращением к адресату по имени и говорит про индивидуальные моменты жизни адресата, но адресат понимает, что это робот. Технология не новая и массовая, поэтому ВАУ-эффект не достигается',
      },
      {
        sign: 'plusMinus',
        description:
          'Адресат может дать запрограммированную команду роботу на какое-либо действие, например, прислать смс или отправить заявку на обратный звонок, но это +1 действие к целевому. Как результат, интерес адресата может угаснуть',
      },
    ],
    totalInfo: {
      plus: 1,
      plusMinus: 2,
      minus: 2,
      text: 'Коэффициент полезности голосового робота: 1',
    },
  },
  {
    title: 'Неперсонализированное видео',
    text: 'Доставка через сообщение',
    prosAndCons: [
      {
        sign: 'plusMinus',
        description:
          'Сообщение через смс или мессенджер с ссылкой на сайт, вызывающее подозрение. Важен текст сообщения и отправитель',
      },
      {
        sign: 'plus',
        description:
          'Адресат может открыть видео, пройдя по ссылке, в любой момент. Тем самым сообщение не теряется, если он занят',
      },
      {
        sign: 'plus',
        description:
          'Профессионально срежессированное и снятое видео, которое привлекает интерес',
      },
      {
        sign: 'minus',
        description:
          'Видео профессиональное, интересное, но ничем не отличающееся по сути от других подобных',
      },
      {
        sign: 'minus',
        description:
          'Обычное видео не может предложить никаких автоматических целевых действий адресату. Вызвав интерес, адресат должен будет сам что-то сделать. Вероятность падения интереса очень высока',
      },
    ],
    totalInfo: {
      plus: 2,
      plusMinus: 1,
      minus: 2,
      text: 'Коэффициент полезности неперсонализированного видео: 1',
    },
  },
]

export const Advantages = () => {
  return (
    <div className={s.advantages}>
      <h3 className={s.advantages__title}>Преимущества работы с MassPers</h3>

      <div className={s.advantages__mobile_wrapper}>
        {advantages.map((advantage) => (
          <AdvantageMobile key={advantage.title} advantage={advantage} />
        ))}
      </div>

      <div className={s.advantages__desktop_wrapper}>
        {advantages.map((advantage) => (
          <AdvantageDesktop key={advantage.title} advantage={advantage} />
        ))}
      </div>
    </div>
  )
}
