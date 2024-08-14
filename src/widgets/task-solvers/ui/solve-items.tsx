import { SolveItem } from './solve-item'
import { TaskType } from '@/shared/data/tasks'

type Props = {
  tasks: TaskType[]
}

export const SolveItems = ({ tasks }: Props) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:w-full md:justify-items-center gap-10 md:gap-y-[92px] xl:grid-cols-4">
      {tasks.map((item) => (
        <SolveItem
          key={item.image + item.text}
          text={item.text}
          image={`/tasks/${item.image}`}
        />
      ))}
    </div>
  )
}
