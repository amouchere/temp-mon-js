import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Temps } from './Temp';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  url = 'https://temp-mon-js.herokuapp.com/api/temps';

  getTemps() {
    return this.http.get<Temps[]>(this.url);
  }
}
