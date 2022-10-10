import { Component, OnInit } from '@angular/core';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent implements OnInit {
  constructor(public pdfViewerModule:PdfJsViewerModule) { }
  ngOnInit(): void {
  }

}
