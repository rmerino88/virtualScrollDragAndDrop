import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private url = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private httpClient: HttpClient) { }

  getPaises() {
    return this.httpClient.get(this.url);
  }
}
