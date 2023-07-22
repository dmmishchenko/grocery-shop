import { ChangeDetectionStrategy } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { ShopStatisticsRepository } from 'src/application/repositories/shop-statistics-repository'
import { ShopStatisticsMockRepository } from 'src/data/repositories/shop-statistics-mock.repository'
import { ShopHeaderComponent } from './shop-header.component'

describe('ShopStatsComponent', () => {
  let component: ShopHeaderComponent
  let fixture: ComponentFixture<ShopHeaderComponent>

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: ShopStatisticsRepository, useClass: ShopStatisticsMockRepository }]
    })
      .overrideComponent(ShopHeaderComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents()

    fixture = TestBed.createComponent(ShopHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create instance', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize the form with the correct initial values', () => {
    expect(component.range.value.start).toBe('2021-06-01')
    expect(component.range.value.end).toBe('2021-12-31')
  })

  it('should show loading', async () => {
    component.isLoading = true
    fixture.detectChanges()
    const filterButton = fixture.debugElement.query(By.css('button'))
    expect(filterButton.nativeElement.textContent.trim()).toBe('Loading...')
  })
})
