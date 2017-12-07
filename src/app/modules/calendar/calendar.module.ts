import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { MonthsComponent } from './container/months/months.component';
import { MonthCellComponent } from './components/month-cell/month-cell.component';

/* Services */
import { DateService } from './services/date.service';
import { MonthService } from './services/month.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MonthsComponent,
    MonthCellComponent
  ],
  providers: [
    DateService,
    MonthService
  ],
  exports: [
    MonthsComponent,
    MonthCellComponent
  ],
  entryComponents: [
    MonthsComponent
  ]
})

export class CalendarModule {}
