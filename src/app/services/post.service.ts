import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://restcountries.com/v2/all';

  constructor(private httpClient: HttpClient) {}

  getCountries() {
    return this.httpClient.get(this.url);
  }
}
