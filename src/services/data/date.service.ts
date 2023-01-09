import { Inject, Injectable } from '@angular/core';
import { Date } from '../domain/date';

@Injectable({
  providedIn: 'root',
})
export class DateService implements Date {
  value = new Date();

  constructor(@Inject('date') date: string | number = Date.now()) {
    this.value = new Date(date);
  }

  agoDays(days = 1) {
    this.value = new Date(this.value.getTime() - days * 24 * 60 * 60 * 1000);
    return this;
  }

  agoBusinessDays(days = 1) {
    const date = new DateService();
    date.agoDays(days);

    while (this.businessDaysCount(date.value) <= days) {
      date.agoDays();
    }

    this.value = date.value;
    return this;
  }

  businessDaysCount(startDate: globalThis.Date, endDate = this.value) {
    let count = 0;
    const curDate = new Date(startDate.getTime());
    while (curDate <= endDate) {
      const dayOfWeek = curDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
      curDate.setDate(curDate.getDate() + 1);
    }
    return count;
  }

  toUnixTimestamp(date = this.value) {
    return Math.floor(date.getTime() / 1000);
  }
}
