import { Component, OnInit } from '@angular/core';
import { SpacePicsService } from '../space-pics.service';
import { CurriculumVitaeService } from '../curriculum-vitae.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cv: any;
  spacePics: any;

  constructor(public spacePicsService:SpacePicsService, public curriculumVitaeService: CurriculumVitaeService) { }

  ngOnInit(): void {
    this.curriculumVitaeService.getCV().subscribe((cv)=>{
      console.log(cv);
      this.cv = cv;
    });
    this.spacePicsService.getSpacePics().subscribe((spacePics)=>{
      console.log(spacePics);
      this.spacePics = spacePics;
    });
    
  }

}
