import { Observable } from 'rxjs'
import { DateString } from 'src/domain/date-string'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'

export interface ShopStatisticsRepository {
  getStatistics(options: {
    from: DateString | undefined
    to?: DateString | undefined
  }): Observable<ShopStatistics[]>
}
