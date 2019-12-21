import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayloadByLocation } from './Temp';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}


  getTemps() {

    return this.http.get<PayloadByLocation[]>(environment.backendUrl);
  }
}
