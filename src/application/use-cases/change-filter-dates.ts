import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DateString } from 'src/domain/date-string'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'
import { Maybe } from '../base/maybe'
import { Usecase } from '../base/use-case'
import { ShopStatisticsRepository } from '../repositories/shop-statistics-repository'

@Injectable()
export class ChangeFilterDates implements Usecase<Observable<ShopStatistics[]>> {
  constructor(private readonly shopStatisticsRepository: ShopStatisticsRepository) {}

  execute(from: Maybe<DateString>, to: Maybe<DateString>): Observable<ShopStatistics[]> {
    return this.shopStatisticsRepository.getStatistics({ from, to })
  }
}
