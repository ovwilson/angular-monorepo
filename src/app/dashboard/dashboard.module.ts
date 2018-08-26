import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from './../shared/shared.material.module';

import { DashboardComponent } from './dashboard.component';
import { APPROUTES } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule,
    RouterModule.forChild(APPROUTES)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
