import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {  PlaygroundModule } from 'angular-playground';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './app/shared/shared.module';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [ BrowserModule, BrowserAnimationsModule, SharedModule]
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
