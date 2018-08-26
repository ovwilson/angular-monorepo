import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { RouterModule } from '@angular/router';
import { APPROUTES } from './app.routing';
import { AppComponent } from './app.component';

import { PreloadSelectedModules } from './app.preload-strategy';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './app.effects';
import { reducers } from './reducers/reducers';

import { environment } from './../environments/environment';
import { SharedModule } from './shared/shared.module';
import { SharedMaterialModule } from './shared/shared.material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    SharedModule,
    RouterModule.forRoot(APPROUTES, { preloadingStrategy: PreloadSelectedModules }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  providers: [PreloadSelectedModules, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
