import { Injectable } from '@angular/core';
import { Csv } from '../domain/csv';

@Injectable({
  providedIn: 'root',
})
export class CsvService implements Csv {
  toJson(csv: string): Object {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',').map((h) => h.toLocaleLowerCase());

    for (let i = 1; i < lines.length; i++) {
      const obj: any = {};
      const curLine = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = curLine[j];
      }

      result.push(obj);
    }

    return result;
  }
}
