import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeService {

  constructor(private httpClient: HttpClient) { }

  getCV(){
    return this.httpClient.get(`http://localhost:3000/curriculum-vitae`);
  }
}
