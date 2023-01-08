import { Injectable } from '@angular/core';
import { Autocomplete, AutocompleteGetResponse } from '../domain/autocomplete';
import { FetchHttpService } from '../infra/fetch-http.service';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService implements Autocomplete {
  constructor(private httpService: FetchHttpService<AutocompleteGetResponse>) {}

  get(query: string) {
    return this.httpService.get(
      `https://query2.finance.yahoo.com/v1/finance/search?q=${query}`
    );
  }
}
