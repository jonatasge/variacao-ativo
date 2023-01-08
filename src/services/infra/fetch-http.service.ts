import { Injectable } from '@angular/core';
import { HttpGet } from '../data/protocols/http-get';

@Injectable({
  providedIn: 'root',
})
export class FetchHttpService<T> implements HttpGet<T> {
  constructor() {}

  get(url: string, props?: RequestInit): Promise<T> {
    return fetch(url, props) as Promise<T>;
  }
}
