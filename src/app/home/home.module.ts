import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
