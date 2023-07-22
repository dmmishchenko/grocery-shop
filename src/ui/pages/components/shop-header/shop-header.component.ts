import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output
} from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { finalize } from 'rxjs'
import { Maybe } from 'src/application/base/maybe'
import { ChangeFilterDates } from 'src/application/use-cases/change-filter-dates'
import { DateString } from 'src/domain/date-string'
import { ShopStatistics } from 'src/domain/shop-statistics.interface'

const START_DATE_INITIAL = '2021-06-01'
const END_DATE_INITIAL = '2021-12-31'
@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss'],
  providers: [ChangeFilterDates],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHeaderComponent {
  @Output() onStatisticsChanged = new EventEmitter<ShopStatistics[]>()

  public isLoading: boolean = false
  public errorMessage: unknown
  public readonly range = new FormGroup({
    start: new FormControl<DateString>(START_DATE_INITIAL),
    end: new FormControl<DateString>(END_DATE_INITIAL)
  })
  public lastSearch: { start: Maybe<DateString>; end: Maybe<DateString> } | null = null

  constructor(
    private readonly changeFilter: ChangeFilterDates,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public filterClicked(): void {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.errorMessage = ''
    const { start, end } = this.range.getRawValue()
    this.changeFilter
      .execute(start, end)
      .pipe(
        finalize(() => {
          this.isLoading = false
          this.lastSearch = {
            start,
            end
          }
          this.cdr.markForCheck()
        })
      )
      .subscribe({
        next: (res) => {
          this.onStatisticsChanged.emit(res)
        },
        error: (err) => {
          this.errorMessage = err.message
        }
      })
  }
}
