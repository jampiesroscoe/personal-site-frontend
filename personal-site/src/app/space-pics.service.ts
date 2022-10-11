import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacePicsService {
  constructor(private httpClient: HttpClient) { }

  getSpacePics(){
    return this.httpClient.get(`https://personal-site-backend-7ymq6.ondigitalocean.app/space-pics`);
  }
}
