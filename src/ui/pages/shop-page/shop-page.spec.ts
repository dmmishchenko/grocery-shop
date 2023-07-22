import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ShopPage } from './shop-page'
import { ShopStatisticsRepository } from 'src/application/repositories/shop-statistics-repository'
import { ShopStatisticsMockRepository } from 'src/data/repositories/shop-statistics-mock.repository'
import { By } from '@angular/platform-browser'

describe('ShopPage', () => {
  let component: ShopPage
  let fixture: ComponentFixture<ShopPage>

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: ShopStatisticsRepository, useClass: ShopStatisticsMockRepository }]
    })
    await TestBed.configureTestingModule({
      imports: [ShopPage]
    }).compileComponents()

    fixture = TestBed.createComponent(ShopPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it(`should show header component`, () => {
    const node = fixture.debugElement.query(By.css('app-shop-header'))
    expect(node).toBeTruthy()
  })

  it(`should show chart component`, () => {
    const node = fixture.debugElement.query(By.css('app-shop-stats'))
    expect(node).toBeTruthy()
  })
})
