import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Payload, PayloadByLocation} from './Temp';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {
  }


  getTemps() {
    return this.http.get<PayloadByLocation[]>(environment.backendUrl);
  }

  getTempsByLocation(location: String) {
    return this.http.get<Payload[]>(environment.backendUrl + "?location=" + location);
  }

  getLocation() {
    return this.http.get<String[]>(environment.backendUrl + "/locations");
  }
}
