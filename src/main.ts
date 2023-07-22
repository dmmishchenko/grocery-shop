import 'zone.js/dist/zone'
import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, RouterOutlet } from '@angular/router'
import { routes } from './routes'
import { ShopStatisticsMockRepository } from './data/repositories/shop-statistics-mock.repository'
import { ShopStatisticsRepository } from './application/repositories/shop-statistics-repository'

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet],
  providers: [{ provide: ShopStatisticsRepository, useClass: ShopStatisticsMockRepository }],
  template: ` <router-outlet></router-outlet> `
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
