import { Input } from '@/shared/ui/input'
import { Select } from '@/shared/ui/select'
import { Button } from '@/shared/ui/button'

export const ApplicationForm = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <div className="flex flex-col px-[12px] py-[60px] gap-[48px] md:flex-row md:gap-[24px] md:grid md:grid-cols-2 md:items-center md:px-[65px] md:py-[46px] xl:gap-[152px] xl:container">
        <div className="flex flex-col gap-[28px] md:gap-[13px]">
          <h5 className="text-primary-500 text-[32px] uppercase text-center font-normal md:text-start xl:text-[62px]">
            Хотите познакомиться получше?
          </h5>
          <p className="text-center font-normal text-[16px] text-dark-500 md:text-start">
            Оставьте заявку и наши специалисты расскажут вам, как наша команда и
            наш продукт будут полезны именно вашему бизнесу
          </p>
        </div>
        <div className="md:flex-grow md:shrink-0">
          <div className="flex flex-col gap-[10px]">
            <Input placeholder={'Как к вам обращаться?'} />
            <Input placeholder={'Наименование вашей компании'} />
            <Input placeholder={'Ваш контактный телефон'} />
            <Select defaultValue={''}>
              <option value="" disabled>
                Отрасль вашего бизнеса
              </option>
              <option value="small">Малый бизнес</option>
              <option value="big">Большой бизнес</option>
            </Select>
          </div>
          <Button className={'uppercase w-full mt-[10px]'}>
            Свяжитесь со мной
          </Button>
        </div>
      </div>
    </div>
  )
}
