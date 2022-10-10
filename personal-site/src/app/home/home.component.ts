import { Component, OnInit } from '@angular/core';
import { SpacePicsService } from '../space-pics.service';
import { CurriculumVitaeService } from '../curriculum-vitae.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public spacePicsService:SpacePicsService, public curriculumVitaeService: CurriculumVitaeService) { }

  ngOnInit(): void {
    
  }

}
