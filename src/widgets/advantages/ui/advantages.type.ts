export type AdvantageType = {
  title: string
  text: string
  prosAndCons: {
    sign: string
    description: string
  }[]
  totalInfo: {
    plus: number
    plusMinus: number
    minus: number
    text: string
  }
}
