import { Injectable } from '@angular/core';
import { Chart, ChartGetResponse } from '../domain/chart';
import { FetchHttpService } from '../infra/fetch-http.service';
import { CsvService } from './csv.service';

@Injectable({
  providedIn: 'root',
})
export class ChartService implements Chart {
  constructor(
    private csvService: CsvService,
    private httpService: FetchHttpService
  ) {}

  async get(query: string): Promise<ChartGetResponse> {
    return await this.httpService
      .get(
        `https://cors-anywhere.herokuapp.com/https://query2.finance.yahoo.com/v7/finance/download/${query}`,
        { method: 'GET' }
      )
      .then((r) => r.text())
      .then((r) => this.csvService.toJson(r) as ChartGetResponse);
  }
}
