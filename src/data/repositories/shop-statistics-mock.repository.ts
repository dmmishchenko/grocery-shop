import { Injectable } from '@angular/core'
import { Observable, delay, of } from 'rxjs'
import { Maybe } from 'src/application/base/maybe'
import { ShopStatisticsRepository } from 'src/application/repositories/shop-statistics-repository'
import { DateString } from 'src/domain/date-string'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'

const MAX_ITEMS_PER_PAGE = 10

@Injectable()
export class ShopStatisticsMockRepository implements ShopStatisticsRepository {
  getStatistics(options: {
    from: Maybe<DateString>
    to: Maybe<DateString>
  }): Observable<ShopStatistics[]> {
    const result = generateRandomData(options.from, options.to)
    return of(result).pipe(delay(1500))
  }
}

function getRandomDate(fromDate: Date, toDate: Date): Date {
  const fromTime = fromDate.getTime()
  const toTime = toDate.getTime()
  return new Date(fromTime + Math.random() * (toTime - fromTime))
}
function generateRandomData(from: Maybe<DateString>, to: Maybe<DateString>): ShopStatistics[] {
  const currentDate = new Date()
  const startDate = from
    ? new Date(from)
    : new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())
  const endDate = to ? new Date(to) : currentDate

  if (startDate.getTime() > endDate.getTime()) {
    console.error("'from' date cannot be greater than 'to' date.")
    return []
  }

  const numberOfDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))
  const maxItems = Math.min(numberOfDays, MAX_ITEMS_PER_PAGE)
  const data: ShopStatistics[] = []

  for (let i = 0; i < maxItems; i++) {
    const randomDate = getRandomDate(startDate, endDate)
    const income = Math.floor(Math.random() * 1000) + 500
    const outcome = Math.floor(Math.random() * 800) + 200
    const clearRevenue = income - outcome

    data.push({
      date: randomDate.toISOString().slice(0, 10),
      income,
      outcome,
      clearRevenue
    })
  }

  return data
}
