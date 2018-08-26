import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './../shared/shared.material.module';
import { RouterModule } from '@angular/router';
import { APPROUTES } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(APPROUTES)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
