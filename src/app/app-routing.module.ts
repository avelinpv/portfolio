import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cv' , component: CvPageComponent},
  { path: 'portfolio' , component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
