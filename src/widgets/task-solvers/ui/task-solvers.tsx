import { Button } from '@/shared/ui/button'
import { SelectSolveType } from '@/features/select-solve-type'
import { SolveItem } from './solve-item'
import documentImg from './documents.png'
import handsImg from './hands.png'
import lampImg from './lamp.png'
import messagesImg from './messages.png'
import { SelectButtons } from './select-buttons'

export const TaskSolvers = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-[10px] md:items-start md:px-[20px] xl:container">
      <div className="md:flex md:gap-[50px] md:justify-start xl:justify-end gap-[89px]">
        <h4 className="uppercase text-4xl text-primary-500 text-center md:text-start xl:text-[53px] xl:leading-[130%] xl:min-w-[572px] font-normal">
          Какие задачи вы решите с MassPers?
        </h4>
        <SelectButtons />
      </div>
      <div className="mt-[39px] w-full">
        <SelectSolveType />
      </div>
      <div className="border border-primary-500 px-[10px] pt-[65px] pb-[48px] flex flex-col items-center justify-center gap-[30px] rounded-[10px] mt-[31px] md:mt-0 md:gap-[40px] md:w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 md:w-full md:justify-items-center gap-10 md:gap-y-[92px] xl:grid-cols-4">
          <SolveItem
            text={
              'Личные сообщения с поздравлениями или иными оповещениями оповещениями'
            }
            image={messagesImg}
          />
          <SolveItem
            text={`Презентация дополнительных продуктов компании к ранее приобретенным клиентом`}
            image={documentImg}
          />
          <SolveItem
            text={`Предложение индивидуальной программы лояльности`}
            image={handsImg}
          />
          <SolveItem
            text={`Интерактивное вовлечение в составления отзыва о продукте и о эмоциях клиента от его использования`}
            image={lampImg}
          />
        </div>
        <Button className="w-full uppercase md:w-auto">
          Подробнее об удержании в продажах
        </Button>
      </div>
    </div>
  )
}
