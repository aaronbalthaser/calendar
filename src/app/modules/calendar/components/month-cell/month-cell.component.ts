import { Component, Input, OnInit } from '@angular/core';

import { Data } from '../../models/data.interface';

@Component({
  selector: 'month-cell',
  templateUrl: 'month-cell.component.html',
  styleUrls: ['month-cell.component.scss'],
})

export class MonthCellComponent implements OnInit {
  @Input() data: Data;

  public active: boolean;

  public getColor() {
    if (this.active) {
      return '#000000';
    } else {
      return '#979797';
    }
  }

  ngOnInit() {
    if (this.data['classes']) {
      this.active = this.data['classes']['active'];
    } else {
      this.active = false;
    }
  }
}
