import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { finalize } from 'rxjs'
import { ChangeFilterDates } from 'src/application/use-cases/change-filter-dates'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHeaderComponent {
  @Output() onStatisticsChanged = new EventEmitter<ShopStatistics[]>()

  public isLoading: boolean = false
  public errorMessage: unknown
  public readonly range = new FormGroup({
    start: new FormControl<Date | null>(new Date('2021-06-01')),
    end: new FormControl<Date | null>(new Date('2021-12-31'))
  })

  constructor(private readonly changeFilter: ChangeFilterDates) {}

  public filterClicked(): void {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.changeFilter
      .execute()
      .pipe(
        finalize(() => {
          this.isLoading = false
        })
      )
      .subscribe({
        next: (res) => {
          this.onStatisticsChanged.emit(res)
        },
        error: (err) => {
          this.errorMessage = err
        }
      })
  }
}
