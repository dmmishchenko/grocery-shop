import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { Maybe } from 'src/application/base/maybe'
import { ShopStatisticsRepository } from 'src/application/repositories/shop-statistics-repository'
import { DateString } from 'src/domain/date-string'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'

const INVALID_PARAMS_MESSAGE = 'invalid params'
@Injectable()
export class ShopStatisticsLiveRepository implements ShopStatisticsRepository {
  constructor(private httpClient: HttpClient) {}

  getStatistics(options: {
    from: Maybe<DateString>
    to: Maybe<DateString>
  }): Observable<ShopStatistics[]> {
    if (!(options.from || options.to)) {
      throwError(() => INVALID_PARAMS_MESSAGE)
    }
    const url = 'http://localhost:5092/api/stats'
    let params = new HttpParams()

    if (options.from) {
      params = params.append('from', options.from)
    }
    if (options.to) {
      params = params.append('to', options.to)
    }

    return this.httpClient.get<ShopStatistics[]>(url, { params })
  }
}
