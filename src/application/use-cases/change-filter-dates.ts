import { Injectable } from '@angular/core'
import { Usecase } from '../base/use-case'
import { ShopStatisticsMockRepository } from 'src/data/repositories/shop-statistics-mock.repository'
import { DateString } from 'src/domain/date-string'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ChangeFilterDates implements Usecase<Observable<ShopStatistics[]>> {
  constructor(private readonly shopStatisticsRepository: ShopStatisticsMockRepository) {}

  execute(from?: DateString, to?: DateString): Observable<ShopStatistics[]> {
    return this.shopStatisticsRepository.getStatistics({ from, to })
  }
}
