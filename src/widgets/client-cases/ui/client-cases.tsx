import s from './client-cases.module.scss'
import { ButtonLink } from '@/shared/ui/button'
import { getCases } from '@/shared/api/get-cases'
import { linearizeCases } from '@/entities/case/lib/linearize-cases'
import { CaseWrapper } from '@/widgets/client-cases/ui/case-wrapper'
import { URLS } from '@/shared/config/urls'

export const ClientCases = async () => {
  const cases = await getCases()
  const linearCases = linearizeCases(cases)

  return (
    <div className={s.client_cases}>
      <h3 className={s.client_cases__title}>Кейсы наших клиентов</h3>
      <div className={s.client_cases__preview_video}>
        {linearCases && <CaseWrapper cases={linearCases} />}
        <ButtonLink href={URLS.CASES} className={s.client_cases__button}>
          Смотреть все кейсы
        </ButtonLink>
      </div>
    </div>
  )
}
