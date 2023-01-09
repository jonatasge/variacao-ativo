import { Injectable } from '@angular/core';
import { Search, SearchGetResponse } from '../domain/search';
import { FetchHttpService } from '../infra/fetch-http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements Search {
  constructor(private httpService: FetchHttpService) {}

  async get(query: string): Promise<SearchGetResponse> {
    const response = await this.httpService.get(
      `https://cors-anywhere.herokuapp.com/https://query2.finance.yahoo.com/v1/finance/search?q=${query}`,
      { method: 'GET' }
    );
    return (await response.json()) as SearchGetResponse;
  }
}
