import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    MainComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
