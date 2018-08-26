import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { SharedMaterialModule } from './../../shared/shared.material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  declarations: [NavbarComponent],
  exports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ]
})
export class NavbarModule { }

export * from './navbar.component';
