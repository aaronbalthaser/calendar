import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MonthService {

  private buildMonth(month) {
    let cells = [];
    let count = 1;
    let prev = month['prev'];
    let next = 1;

    for (let i = 0; i < 42; i++) {
      cells.push({ id: i });
    }

    for (let i = month['firstDay'] - 1; i >= 0; i--) {
      cells[i]['date'] = prev;
      cells[i]['classes'] = {
        active: false
      }
      prev--;
    }

    cells.map((cell, index) => {
      if (index >= month['firstDay'] && count <= month['days']) {
        cell.date = count++;
        cell.classes = {
          active: true
        }
      } else if (index >= month['firstDay']) {
        cell.date = next;
        cell.classes = {
          active: false
        }
        next++;
      }
    });

    return cells;
  }

  public clean() {
    let cells = [];
  }

  public getMonth(month) {
    return Observable.of(this.buildMonth(month));
  }
}
