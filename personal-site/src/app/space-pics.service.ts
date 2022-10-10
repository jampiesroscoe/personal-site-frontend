import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacePicsService {
  constructor(private httpClient: HttpClient) { }

  getSpacePics(){
    return this.httpClient.get(`http://localhost:3000/space-pics`);
  }
}
