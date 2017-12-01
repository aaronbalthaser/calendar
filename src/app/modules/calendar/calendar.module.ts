import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthsComponent } from './container/months/months.component';
import { MonthCellComponent } from './components/month-cell/month-cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MonthsComponent,
    MonthCellComponent
  ],
  providers: [],
  exports: [
    MonthsComponent,
    MonthCellComponent
  ],
  entryComponents: [
    MonthsComponent
  ]
})

export class CalendarModule {}
