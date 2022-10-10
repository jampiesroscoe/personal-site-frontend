import { Component, OnInit } from '@angular/core';
import { SpacePicsService } from '../space-pics.service';

@Component({
  selector: 'app-space-fun',
  templateUrl: './space-fun.component.html',
  styleUrls: ['./space-fun.component.css']
})
export class SpaceFunComponent implements OnInit {
  spacePics: any;
  
  constructor(public spacePicsService:SpacePicsService) { }


  ngOnInit(): void {
    this.spacePicsService.getSpacePics().subscribe((spacePics)=>{
      this.spacePics = spacePics;
    });
    
  }

}
