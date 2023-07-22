import { Observable } from 'rxjs'
import { DateString } from 'src/domain/date-string'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'
import { Maybe } from '../base/maybe'
import { Injectable } from '@angular/core'

@Injectable()
export abstract class ShopStatisticsRepository {
  abstract getStatistics(options: {
    from: Maybe<DateString>
    to: Maybe<DateString>
  }): Observable<ShopStatistics[]>
}
