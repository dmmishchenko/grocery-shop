import 'zone.js/dist/zone'
import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, RouterOutlet } from '@angular/router'
import { routes } from './routes'
import { ShopStatisticsRepository } from './application/repositories/shop-statistics-repository'
import { ShopStatisticsLiveRepository } from './data/repositories/shop-statistics-live.repository'
import { HttpClientModule } from '@angular/common/http'
// import { ShopStatisticsMockRepository } from './data/repositories/shop-statistics-mock.repository'

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [{ provide: ShopStatisticsRepository, useClass: ShopStatisticsLiveRepository }],
  // providers: [{ provide: ShopStatisticsRepository, useClass: ShopStatisticsMockRepository }],
  template: ` <router-outlet></router-outlet> `
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
