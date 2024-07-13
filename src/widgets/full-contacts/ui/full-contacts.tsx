import { TgSvgIcon } from '@/shared/ui/icons/tg.svg-icon'
import { WhatsAppSvgIcon } from '@/shared/ui/icons/whats-app.svg-icon'
import s from './full-contacts.module.scss'

export const FullContacts = () => {
  return (
    <section className={s.full_contacts}>
      <h3 className={s.full_contacts__title}>Контакты</h3>
      <div className={s.full_contacts__info}>
        <div className={s.full_contacts__meta}>
          <p>Адрес: Москва Варшавское шоссе, дом 37а, стр 8, офис 12</p>
          <div className={s.full_contacts__mail_phone}>
            <p>8 800 707 61 90</p>
            <p>info@masspers.com</p>
          </div>
          <div className={s.full_contacts__icons}>
            <TgSvgIcon />
            <WhatsAppSvgIcon />
          </div>
        </div>
        <div className={s.full_contacts__requizits}>
          <p className={s.full_contacts__requizit}>Реквизиты:</p>
          <div className={s.full_contacts__requizit_info}>
            <p>
              ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ &quot;СВН&quot; (ООО
              &quot;СВН&quot;)
            </p>
            <p>ОГРН 1167746861688</p>
            <p>ИНН 7730213660</p>
            <p>КПП 772801001</p>
            <p>
              Юр.адрес: 117342, город Москва, ул Бутлерова, д. 17б, помещ.
              60е/11/2
            </p>
            <p>
              Осн.ОКВЭД Разработка компьютерного программного обеспечения
              (62.01)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
