import { IssueSolution } from '@/entities/issue-solution'

const list = [
  {
    issue:
      'Текстовая рассылка не читается или воспринимается клиентами, как робототизированная, а значит не серьезная',
    solution:
      'Само по себе видеосообщение от ТОП-менеджмента компании - продавца является новым и интересным для клиента маркетинговым инструментом. А видео-сообщение обращенное лично к адресату производит эффект наивысшей формы клиентского сервиса, а значит повышает лояльность к бренду',
  },
  {
    issue:
      'Оповещать или поздравлять клиентов лично звонком очень трудозатратно',
    solution:
      'Персональные видео генерируются программным обеспечением MassPers автоматически при помощи CRM и заготовленных шаблонов в течение 2-х минут. За день можно отправить более 1000 сообщений',
  },
  {
    issue:
      'Продавцы по разным причинам не предлагают клиентам сопутствующие продукты',
    solution:
      'Настройка автоматической отправки персонального видео-сообщения новому клиенту исключит риск бездействия продавца и позволит провести продающую презентацию дополнительных продуктов',
  },
  {
    issue:
      'Продавцы забывают или не испытывают должного интереса к старым клиентам, потому редко связываются с ними',
    solution:
      'Персональное видео-обращение от ТОП-менеджмента компании с предоставлением личной прораммы лояльности убедит клиента стать максимально приверженным к бренду.',
  },
]

export const IssueSolutionList = () => {
  return (
    <div className="bg-[#f3f3f3] text-dark-500">
      <div className="flex flex-col items-center justify-center w-full px-[10px] pt-[22px] md:pt-[40px] md:pb-[42px] md:items-start md:px-[20px] xl:container xl:flex-row xl:gap-[75px] xl:pt-[70px] xl:pb-[52px]">
        <div className="w-full xl:basis-[40%]">
          <h3 className="text-[22px] leading-[34px] font-medium text-center mb-[17px] md:text-[29px] md:text-start md:leading-[44px] xl:text-[29px] xl:leading-[44px]">
            Проблемы и решение
          </h3>
          <h4 className="text-primary-500 text-[32px] leading-[41px] uppercase text-center font-medium mb-[1px] shadow-title md:text-start xl:text-[53px] xl:leading-[68px]">
            Какие боли снимает MassPers и как?
          </h4>
        </div>

        <div className="w-full xl:basis-[60%]">
          <div className="hidden xl:flex xl:flex-row xl:pb-[23px] xl:border-b-[1px] xl:border-[#EE4143] xl:gap-[49px] xl:mb-[26px]">
            <span className="text-[29px] leading-[44px] font-medium text-start xl:basis-[50%]">
              Боли
            </span>
            <span className="text-[29px] leading-[44px] font-medium text-start xl:basis-[50%]">
              Решение
            </span>
          </div>
          {list.map(({ issue, solution }, index) => (
            <IssueSolution key={index} issue={issue} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  )
}
