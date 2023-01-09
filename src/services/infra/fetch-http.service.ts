import { Injectable } from '@angular/core';
import { HttpGet } from '../data/protocols/http-get';

@Injectable({
  providedIn: 'root',
})
export class FetchHttpService implements HttpGet {
  constructor() {}

  get(url: string, props?: RequestInit): Promise<Response> {
    return fetch(url, props);
  }
}
