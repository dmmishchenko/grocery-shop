import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShopHeaderComponent } from '../components/shop-header/shop-header.component'
import { ShopStatsComponent } from '../components/shop-stats/shop-stats.component'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'

@Component({
  standalone: true,
  imports: [CommonModule, ShopHeaderComponent, ShopStatsComponent],
  templateUrl: './shop-page.html',
  styleUrls: ['./shop-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopPage {
  @ViewChild(ShopStatsComponent) statisticsComponent!: ShopStatsComponent

  public processStatistics(data: ShopStatistics[]) {
    if (this.statisticsComponent) {
      this.statisticsComponent.setData(data)
    }
  }
}
