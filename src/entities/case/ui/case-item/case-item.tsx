import cn from 'classnames'
import s from './case-item.module.scss'
import { Dispatch, MouseEvent, SetStateAction, useId } from 'react'
import { Popper } from '@mui/base'
import { CaseDTO } from '@/shared/api/get-cases'
import { CaseItemTooltip } from '@/entities/case/ui/case-item/case-item.tooltip'

type Props = {
  isActive: boolean
  value: CaseDTO
  image: string
  onClickIcon: (el: CaseDTO) => void
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
      <img
        src={'https://placehold.co/600x400'}
        className={s.case_item__preveiew}
        alt={'Preview Image'}
      />
      <Popper
        className={s.case_item__tooltip_paper}
        placement="top-end"
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [-30, -30],
            },
          },
        ]}
      >
        <CaseItemTooltip />
      </Popper>
    </button>
  )
}
