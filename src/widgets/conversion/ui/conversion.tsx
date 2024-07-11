import s from './conversion.module.scss'
import { ConversionOption } from '@/widgets/conversion/ui/conversion-option'
import Image from 'next/image'
import { RedArrow } from '@/shared/ui/red-arrow'
import Link from 'next/link'
import banner1 from './banner1.png'
import banner2 from './banner2.png'
import banner3 from './banner3.png'
import banner4 from './banner4.png'
import chart from './chart.png'

const options = [
  {
    img: banner1,
    percent: 'конверсия 0%',
    text: 'Адресат получает сообщение через любой мессенджер с сообщением о том, что для него ваша компания подготовила личное видео-обращение',
  },
  {
    img: banner2,
    percent: 'конверсия 25-30%',
    text: 'Адресат переходит по ссылке на сайт с его персональным видео, который расположен на вашем домене, где ему предлагается посмотреть это видео',
  },
  {
    img: banner3,
    percent: 'конверсия 90-100%',
    text: 'Адресат начинает просмотр видео и, в большинстве случаев, не может от него оторваться, потому что оно производит на него неизгладимое впечатление, так как сделано профессиональ-но, при этом обращено лично ему, а еще оно интерактивно',
  },
  {
    img: banner4,
    percent: 'конверсия 15-30%',
    text: 'Адресат взаимодействует с видео, отвечая на вопросы, которые вы ему задаете. А в конце видео совершает необходимое вам целевое действие, например нажимает на кнопку с переходом на ваш сай',
  },
]

export const Conversion = () => {
  return (
    <div className={s.conversion}>
      <div className={s.conversion__subheader}>
        <div className={s.conversion__point_title}>
          <h3 className={s.conversion__point}>Конверсии</h3>
          <h4 className={s.conversion__title}>Ваш успех с MassPers</h4>
        </div>

        <div className={s.conversion__general_info}>
          <div className={s.conversion__general_info_item}>
            <h5 className={s.conversion__general_info_title}>&gt; 1 000 000</h5>
            <p className={s.conversion__general_info_text}>
              Столько IT-платформа MassPers генерирует видео-сообщений в сутки
            </p>
          </div>
          <div className={s.conversion__general_info_item}>
            <h5 className={s.conversion__general_info_title}>&lt; 2</h5>
            <p className={s.conversion__general_info_text}>
              Столько IT-платформа MassPers генерирует видео-сообщений в сутки
            </p>
          </div>
        </div>
      </div>

      <div className={s.conversion__options}>
        {options.map((opt) => (
          <ConversionOption key={opt.percent} option={opt} />
        ))}
      </div>

      <div className={s.conversion__more_total_info}>
        <div className={s.conversion__more_info}>
          <div className={s.conversion__more_info_text}>
            <h5 className={s.conversion__more_info_title}>А ещё</h5>
            <p className={s.conversion__more_info_description}>
              Вам постоянно доступен актуальный отчет такого вида
            </p>
            <Link href={'#'} className={s.conversion__more_info_link}>
              Посмотреть в полном масштабе
              <RedArrow />
            </Link>
          </div>
          <div className={s.conversion__more_info_image_wrapper}>
            <Image src={chart} alt={'chart'} />
          </div>
        </div>

        <div className={s.conversion__total_info}>
          <h5 className={s.conversion__total_info_title}>Итого</h5>
          <div className={s.conversion__total_info_text}>
            <p>
              Целевая конверсия +15%
              <span className={s.conversion__total_info_note}>
                *показатели зависят от каналов доставки и ЦА
              </span>
            </p>
            <p>Вы получаете все ответы на заданные в видео вопросы</p>
            <p>
              Полная статистика конверсий, что помогает вашему маркетингу в
              принятии решений
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
