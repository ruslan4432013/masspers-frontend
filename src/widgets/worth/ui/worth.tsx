'use client'
import s from './worth.module.scss'
import { useCustomSearchParams } from '@/shared/lib/hooks/use-custom-search-params'
import { DEPARTMENT_KEY, SOLVE_KEY } from '@/entities/tasks'
import { GetTasksDTO } from '@/shared/api/get-tasks'
import { getStaticUrl } from '@/shared/lib/get-static-url'

type Props = {
  tasksDTO: GetTasksDTO
}

export const Worth = ({ tasksDTO }: Props) => {
  const queryParams = useCustomSearchParams()
  const solveValue = queryParams.get(SOLVE_KEY)
  const departmentValue = queryParams.get(DEPARTMENT_KEY)

  if (!solveValue || !departmentValue) {
    return null
  }
  const values = tasksDTO.Who?.[departmentValue]?.[solveValue]?.Values

  if (!values) {
    return null
  }

  const valuesDTO = Object.values(values)

  return (
    <div className={s.worth}>
      <div className={s.worth__point_title}>
        <h3 className={s.worth__point}>Ценность</h3>
        <h4 className={s.worth__title}>
          Какую ценность получает клиент MassPress?
        </h4>
      </div>

      <div className={s.worth__inner__container}>
        {valuesDTO.map((value, idx) => (
          <div key={idx} className={s.worth__item__container}>
            <div className={s.img__container}>
              <img
                src={getStaticUrl(value.icon)}
                alt={value.descript.slice(0, 20)}
                width={100}
                height={100}
                className={s.img}
              />
            </div>
            <p className={s.text}>{value.descript}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
