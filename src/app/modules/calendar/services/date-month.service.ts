import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DateService {
  private date = <Date>{};
  private month: number;
  private year: number;
  private days: number;

  private getDate() {
    return Observable.of(this.date = new Date());
  }

  private getMonth() {
    return this.month = this.date.getMonth();
  }

  private getYear() {
    return this.year = this.date.getFullYear();
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

  public getCurrent() {
    return this.getDate()
      .map(
        date => {
          return {
            date: date,
            month: this.getMonth(),
            year: this.getYear(),
            days: this.getDays(),
            firstDay: this.getFirstDay(),
            lastDay: this.getLastDay(),
            prev: this.getPrevMonthDays()
          };
        }
      )
  }
}
