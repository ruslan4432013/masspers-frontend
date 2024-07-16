'use client'
import cn from 'classnames'
import s from './case-item.module.scss'
import { Dispatch, MouseEvent, SetStateAction, useId } from 'react'
import { Popper } from '@mui/base'
import { getStaticUrl } from '@/shared/lib/get-static-url'
import { CaseDTO } from '@/shared/api/get-cases'

type Props = {
  isActive: boolean
  value: CaseDTO
  image: string
  onClickIcon: (el: CaseDTO) => void
  anchorEl: HTMLElement | null
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
}

export const CaseItem = (props: Props) => {
  const { value, onClickIcon, isActive, setAnchorEl, anchorEl, image } = props

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
      <img
        src={getStaticUrl(`https://test-mass.ru/admin/${image}`)}
        className={s.case_item__preveiew}
        alt={'Preview Image'}
      />
      <Popper disablePortal id={id} open={isOpen} anchorEl={anchorEl}>
        <div>The content of the Popper.</div>
      </Popper>
    </button>
  )
}
