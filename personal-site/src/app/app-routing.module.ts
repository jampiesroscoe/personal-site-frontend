import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSiteComponent } from './about-site/about-site.component';
import { HomeComponent } from './home/home.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { SpaceFunComponent } from './space-fun/space-fun.component';


const routes: Routes = [
  { 
    path:"", component: HomeComponent, 
  },
  {
    path:"spacefun", component: SpaceFunComponent
  },

  {
    path:"mycv", component: MyCvComponent
  },

  {
    path:"aboutsite", component: AboutSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
