import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { UtilsService } from '../../../shared/services/utils';

@Injectable()
export class DateService {
  private date = <Date>{};
  private month: number;
  private year: number;
  private days: number;

  constructor(private utils: UtilsService) {}

  private getDate(options) {
    if (this.utils.isObjectEmpty(options)) {
      return Observable.of(this.date = new Date());
    } else {
      return Observable.of(this.date = new Date(options['year'], options['month']));
    }
  }

  private getYears() {
    return {
      current: this.date.getFullYear(),
      next: this.date.getFullYear() + 1,
      prev: this.date.getFullYear() - 1
    };
  }

  private getYear() {
    return Observable.of(this.year = this.date.getFullYear());
  }

  private getMonth() {
    return Observable.of(this.month = this.date.getMonth());
  }

  private getDays() {
    return new Date(this.year, (this.month + 1), 0).getDate();
  }

  private getFirstDay() {
    return new Date(this.year, (this.month), 1).getDay();
  }

  private getLastDay() {
    return new Date(this.year, (this.month + 1), 0).getDay();
  }

  private getPrevMonthDays() {
    let date = new Date(this.year, (this.month - 1), 1);
    return new Date(date.getFullYear(), (date.getMonth() + 1), 0).getDate();
  }

  public clean() {
    this.date = <Date>{};
    this.month = null;
    this.year = null;
    this.days = null;
  }

  public getMonthData(options) {
    let _options = options || {};

    return this.getDate(_options)
      .map(date => {
        this.date = date;
      })
      .flatMap(() => this.getYear())
        .map(year => {
          this.year = year;
        }
      )
      .flatMap(() => this.getMonth())
        .map(month => {
          this.month = month;
        }
      )
      .map(
        date => {
          return {
            date: date,
            year: this.year,
            month: this.month,
            days: this.getDays(),
            firstDay: this.getFirstDay(),
            lastDay: this.getLastDay(),
            prev: this.getPrevMonthDays(),
            years: this.getYears()
          };
        }
      )
  }
}
