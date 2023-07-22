import { Injectable } from '@angular/core'
import { Usecase } from '../base/use-case'
import { ShopStatisticsMockRepository } from 'src/data/repositories/shop-statistics-mock.repository'
import { DateString } from 'src/domain/date-string'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'
import { Observable } from 'rxjs'
import { Maybe } from '../base/maybe'

@Injectable({ providedIn: 'root' })
export class ChangeFilterDates implements Usecase<Observable<ShopStatistics[]>> {
  constructor(private readonly shopStatisticsRepository: ShopStatisticsMockRepository) {}

  execute(from: Maybe<DateString>, to: Maybe<DateString>): Observable<ShopStatistics[]> {
    return this.shopStatisticsRepository.getStatistics({ from, to })
  }
}
