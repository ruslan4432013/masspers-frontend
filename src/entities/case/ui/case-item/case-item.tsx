'use client'
import cn from 'classnames'
import s from './case-item.module.scss'
import Image from 'next/image'
import previewImage from './video-preview.png'
import { Dispatch, MouseEvent, SetStateAction, useId } from 'react'
import { Popper } from '@mui/base'

type Props = {
  isActive: boolean
  value: number
  onClickIcon: (el: number) => void
  anchorEl: HTMLElement | null
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
}

export const CaseItem = (props: Props) => {
  const { value, onClickIcon, isActive, setAnchorEl, anchorEl } = props

  const id = useId()

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    onClickIcon(value)
  }
  const isOpen = Boolean(anchorEl)

  return (
    <button
      onClick={handleClick}
      className={cn(s.case_item, {
        [s.case_item__active]: isActive,
      })}
    >
      <Image
        src={previewImage}
        className={s.case_item__preveiew}
        alt={'Preview Image'}
      />
      <Popper id={id} open={isOpen} anchorEl={anchorEl}>
        <div>The content of the Popper.</div>
      </Popper>
    </button>
  )
}
