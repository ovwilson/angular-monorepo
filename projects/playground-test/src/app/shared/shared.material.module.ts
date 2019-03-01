import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatSidenavModule, MatToolbarModule, MatIconModule,
  MatButtonModule, MatProgressBarModule, MatRadioModule,
  MatListModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatChipsModule, MatTabsModule, MatSelectModule,
  MatExpansionModule, MatStepperModule, MatDialogModule,
  MatTableModule, MatCheckboxModule, MatDividerModule, MatMenuModule,
  MatGridListModule
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';

const COMPONENT_MODULES = [
  CommonModule,
  FlexLayoutModule,
  MatSidenavModule, MatToolbarModule, MatIconModule,
  MatButtonModule, MatProgressBarModule, MatRadioModule,
  MatListModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatChipsModule, MatTabsModule, MatSelectModule,
  MatExpansionModule, MatStepperModule, MatDialogModule,
  MatTableModule, MatCheckboxModule, MatDividerModule, MatMenuModule,
  MatGridListModule, LayoutModule
];

@NgModule({
  imports: COMPONENT_MODULES,
  exports: COMPONENT_MODULES
})
export class SharedMaterialModule { }


