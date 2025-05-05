import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  public login(obj: User) {
    return this.http.post(
      'https://projectapi.gerasim.in/api/IncidentTracking/login',
      obj
    );
  }
}
