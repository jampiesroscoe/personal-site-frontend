import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { HomeComponent } from './home/home.component';
import { SpaceFunComponent } from './space-fun/space-fun.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { AboutSiteComponent } from './about-site/about-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpaceFunComponent,
    MyCvComponent,
    AboutSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfJsViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
