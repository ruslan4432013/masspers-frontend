'use client'

import s from './advantage-mobile.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import open from '../open.svg'
import close from '../close.svg'
import { AdvantageType } from '../advantage.type'
import { AdvantageItem } from '../advantage-item'
import { AdvantageTotal } from '../advantage-total'

type Props = {
  advantage: AdvantageType
}

export const AdvantageMobile = ({ advantage }: Props) => {
  const { title, text, prosAndCons, totalInfo } = advantage
  const [listOpen, setListOpen] = useState(false)

  const toggleListOpen = () => {
    setListOpen((prev) => !prev)
  }

  return (
    <div className={s.advantage_mobile}>
      <button className={s.advantage_mobile__toggle} onClick={toggleListOpen}>
        <Image src={listOpen ? close : open} alt={'toggle button'} />
      </button>
      <div className={s.advantage_mobile__subheader}>
        <h5 className={s.advantage_mobile__title}>{title}</h5>
        <p className={s.advantage_mobile__general_text}>{text}</p>
      </div>

      <div className={s.advantage_mobile__pros_cons_total} hidden={!listOpen}>
        <div className={s.advantage_mobile__pros_and_cons}>
          {prosAndCons.map((item) => (
            <AdvantageItem key={item.description} item={item} />
          ))}
        </div>

        <AdvantageTotal totalInfo={totalInfo} />
      </div>
    </div>
  )
}
