import { Injectable } from '@angular/core';
import { Search, SearchGetResponse } from '../domain/search';
import { FetchHttpService } from '../infra/fetch-http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements Search {
  constructor(private httpService: FetchHttpService<SearchGetResponse>) {}

  get(query: string) {
    return this.httpService.get(
      `https://query2.finance.yahoo.com/v1/finance/search?q=${query}`
    );
  }
}
