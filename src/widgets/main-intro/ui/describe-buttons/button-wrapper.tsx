import { DescribeButton } from '@/shared/ui/describe-button'

type Props = {
  className?: string
  title: string
  description: string
  href?: string
  isActive: boolean
  onClick?: () => void
}

export const ButtonWrapper = (props: Props) => {
  const { className, description, title, isActive, onClick } = props
  return (
    <DescribeButton
      title={title}
      description={description}
      isActive={isActive}
      onClick={onClick}
      className={className}
    />
  )
}
