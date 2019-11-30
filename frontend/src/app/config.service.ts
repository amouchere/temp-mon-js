import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Temps } from './Temp';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/api/temps';

  getTemps() {
    return this.http.get<Temps[]>(this.url);
  }
}
