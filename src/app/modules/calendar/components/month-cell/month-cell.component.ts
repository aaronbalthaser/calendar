import { Component, Input, OnInit } from '@angular/core';

import { Data } from '../../models/data.interface';

@Component({
  selector: 'month-cell',
  templateUrl: 'month-cell.component.html',
  styleUrls: ['month-cell.component.scss'],
})

export class MonthCellComponent implements OnInit {
  @Input() data: Data;

  ngOnInit() {

  }
}
