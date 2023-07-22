import { Route } from '@angular/router'
import { ShopPage } from './ui/pages/shop-page/shop-page'

export const routes: Route[] = [
  {
    path: '',
    component: ShopPage
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'shop'
  }
]
