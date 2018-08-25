import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APPROUTES } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APPROUTES)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
