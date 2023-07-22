export interface ChartConfig {
  title: string
  hAxis: {
    title: string
  }
  vAxis: {
    title: string
  }
  series: {
    [key: number]: {
      color: string
    }
  }
}
