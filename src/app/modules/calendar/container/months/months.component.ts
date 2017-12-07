import { Component, OnInit } from '@angular/core';

import { DateService } from '../../services/date.service';
import { MonthService } from '../../services/month.service';
import { TransmitService } from '../../../../shared/services/transmit';

@Component({
  selector: 'months',
  templateUrl: 'months.component.html',
  styleUrls: ['months.component.scss'],
})

export class MonthsComponent implements OnInit {
  public cells = [];
  public month = {};
  public subscription1: any;
  public subscription2: any;

  private options = {
    year: 2017,
    month: 11
  };

  constructor(
    private dateService: DateService,
    private monthService: MonthService,
    private transmit: TransmitService
  ) {

    this.subscription1 = this.transmit.prev
      .subscribe(() => {
        this.prev();
      }
    );

    this.subscription1 = this.transmit.next
      .subscribe(() => {
        this.next();
      }
    );
  }

  private getMonthData() {
    this.dateService.getMonthData(this.options)
      .subscribe(
        _month => {
          this.month = _month;
          this.loadCalendar();
        },
        _error => {},
        () => {
          this.dateService.clean();
        }
      );
  }

  private loadCalendar() {
    this.monthService.getMonth(this.month)
      .subscribe(
        _cells => {
          this.cells = _cells;
        }, _error => {},
        () => {
          this.monthService.clean();
        }
      );
  }

  public prev() {
    this.month['month']--;

    if (this.month['month'] === 1) {
      this.options['month'] = 11;
      this.options['year'] = this.month['years']['prev'];
    } else {
      this.options['month'] = this.month['month'];
      this.options['year'] = this.month['year'];
    }

    this.getMonthData();
  }

  public next() {
    this.month['month']++;

    if (this.month['month'] === 12) {
      this.options['month'] = 0;
      this.options['year'] = this.month['years']['next'];
    } else {
      this.options['month'] = this.month['month'];
      this.options['year'] = this.month['year'];
    }

    this.getMonthData();
  }

  public ngOnInit() {
    this.getMonthData();
  }
}
