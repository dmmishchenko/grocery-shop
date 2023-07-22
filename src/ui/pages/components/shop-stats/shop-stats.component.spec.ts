import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ShopStatsComponent } from './shop-stats.component'
import { ChangeDetectionStrategy } from '@angular/core'
import { By } from '@angular/platform-browser'

describe('ShopStatsComponent', () => {
  let component: ShopStatsComponent
  let fixture: ComponentFixture<ShopStatsComponent>

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [ShopStatsComponent]
    })
      .overrideComponent(ShopStatsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents()

    fixture = TestBed.createComponent(ShopStatsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it(`should show 'Press "filter" button' message for initial state`, () => {
    expect(component.chartData).toBe(null)
    const node = fixture.debugElement.query(By.css('p'))
    expect(node.nativeElement.textContent).toBe(`Press "filter" button`)
  })

  it(`should show 'The array is empty.' message for initial state`, () => {
    component.chartData = []
    fixture.detectChanges()

    const node = fixture.debugElement.query(By.css('p'))
    expect(node.nativeElement.textContent).toBe(`The array is empty.`)
  })

  it(`should show chart element`, () => {
    component.chartData = [[]]
    fixture.detectChanges()

    const node = fixture.debugElement.query(By.css('google-chart'))
    expect(node).toBeTruthy()
  })
})
