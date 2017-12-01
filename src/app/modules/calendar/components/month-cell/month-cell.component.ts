import { Component, Input } from '@angular/core';

@Component({
  selector: 'month-cell',
  templateUrl: 'month-cell.component.html',
  styleUrls: ['month-cell.component.scss'],
})

export class MonthCellComponent {
  @Input() data: {};
}
