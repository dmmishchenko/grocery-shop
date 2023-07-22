import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { ChartType, GoogleChartsModule, Row } from 'angular-google-charts'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'
import { ChartConfig } from './chart-config/chart-config.interface'

@Component({
  selector: 'app-shop-stats',
  standalone: true,
  imports: [CommonModule, GoogleChartsModule],
  templateUrl: './shop-stats.component.html',
  styleUrls: ['./shop-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopStatsComponent implements OnInit {
  public columnNames: string[] = []
  public chartOptions: ChartConfig | object = {}
  public chartType: ChartType = ChartType.LineChart
  public chartWidth: number = 0
  public chartHeight: number = 0
  public chartData: Row[] | null = null

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setupChart()
  }

  private setupChart(): void {
    this.chartWidth = 800
    this.chartHeight = 400
    this.columnNames = ['Date', 'Daily Income', 'Daily Outcome', 'Clear Revenue']
    this.chartOptions = {
      title: 'Shop Revenue',
      hAxis: {
        title: 'Date'
      },
      vAxis: {
        title: 'Amount'
      },
      series: {
        0: { color: 'red' },
        1: { color: 'blue' },
        2: { color: 'green' }
      }
    }
  }

  public setData(data: ShopStatistics[]): void {
    this.chartData = data.map(
      (item) => [item.date, item.income, item.outcome, item.clearRevenue] as Row
    )
    this.cdr.markForCheck()
  }
}
