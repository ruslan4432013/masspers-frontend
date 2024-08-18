'use client'
import { SolutionItem } from './solution-item'
import s from './solution-items.module.scss'
import { TaskType } from '@/shared/data/tasks'

type Props = {
  tasks: TaskType[]
}

export const SolutionItems = ({ tasks }: Props) => {
  return (
    <div className={s.solution_items}>
      {tasks.map((item) => (
        <SolutionItem
          key={item.image + item.text}
          text={item.text}
          image={`/tasks/${item.image}`}
        />
      ))}
    </div>
  )
}
