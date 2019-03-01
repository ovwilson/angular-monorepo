import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {  PlaygroundModule } from 'angular-playground';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule} from './app/shared/shared.material.module';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [ BrowserModule, BrowserAnimationsModule, SharedMaterialModule]
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
