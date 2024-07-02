'use client'
import { Button } from '@/shared/ui/button'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import s from './select-buttons.module.scss'

const INDUSTRY_KEY = 'industry'

const variantFor = (isActive: boolean) => {
  if (isActive) {
    return 'primary'
  }
  return 'secondary'
}

const industry = [
  'Отели',
  'Застройщики',
  'Телеком',
  'Государство',
  'Образование',
  'Авто',
  'Банки',
  'Медицина',
]

export const SelectButtons = () => {
  const params = useCustomSearchParams()
  const queryValue = params.get(INDUSTRY_KEY)

  const handleChange = (newValue: string) => () => {
    params.set(INDUSTRY_KEY, newValue)
  }

  return (
    <div className={s.select_buttons}>
      {industry.map((department) => (
        <Button
          key={department}
          className={s.select_buttons__button}
          variant={variantFor(queryValue === department)}
          onClick={handleChange(department)}
        >
          {department}
        </Button>
      ))}
    </div>
  )
}
