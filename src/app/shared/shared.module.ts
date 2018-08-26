import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from './shared.material.module';
import { NavbarModule } from './../features/navbar/navbar.module';

const COMPONENT_MODULES = [
  CommonModule,
  RouterModule,
  SharedMaterialModule,
  NavbarModule
];

@NgModule({
  imports: COMPONENT_MODULES,
  exports: COMPONENT_MODULES
})
export class SharedModule { }
