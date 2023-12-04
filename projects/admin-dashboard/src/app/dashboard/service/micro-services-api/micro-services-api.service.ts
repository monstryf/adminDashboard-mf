import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasMicroServicesApiService } from 'projects/shell-mf/src/app/micro-services-api/micro-frontend-options/bas-micro-services-api.service';
import { environment as env } from 'projects/admin-dashboard/src/environments/environment';
// ""
@Injectable({
  providedIn: 'root',
})
export class MicroServicesApiService extends BasMicroServicesApiService {
  constructor(http: HttpClient) {
    super(http);
  }
  public override get apiUrl(): string {
    return env.serverUrl;
  }
}
