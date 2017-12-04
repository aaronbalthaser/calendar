import { Component, OnInit } from '@angular/core';

import { DateService } from '../../services/date-month.service';

@Component({
  selector: 'months',
  templateUrl: 'months.component.html',
  styleUrls: ['months.component.scss'],
})

export class MonthsComponent implements OnInit {
  public cells = [];
  public currentMonthDay = {};

  constructor(
    private dateService: DateService
  ) {}

  private buildCalendar() {
    let count = 1;
    let prev = this.currentMonthDay['prev'];
    let next = 1;

    for (let i = 0; i < 42; i++) {
      this.cells.push({ id: i });
    }

    for (let i = this.currentMonthDay['firstDay'] - 1; i >= 0; i--) {
      this.cells[i]['date'] = prev;
      this.cells[i]['classes'] = {
        active: false
      }
      prev--;
    }

    this.cells.map((cell, index) => {
      if (index >= this.currentMonthDay['firstDay'] &&
          count <= this.currentMonthDay['days']) {
        cell.date = count++;
        cell.classes = {
          active: true
        }
      } else if (index >= this.currentMonthDay['firstDay']) {
        cell.date = next;
        cell.classes = {
          active: false
        }
        next++;
      }
    });
  }

  public ngOnInit() {
    this.dateService.getCurrent()
      .subscribe(
        _current => {
          this.currentMonthDay = _current;
          this.buildCalendar();
        },
        _error => {},
        () => {
          this.dateService.clean();
        }
      );
  }
}
