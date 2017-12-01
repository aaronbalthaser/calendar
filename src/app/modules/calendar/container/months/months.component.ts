import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'months',
  templateUrl: 'months.component.html',
  styleUrls: ['months.component.scss'],
})

export class MonthsComponent implements OnInit {
  public cells = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i < 36; i++) {
      this.cells.push({ id: i });
    }
  }
}
