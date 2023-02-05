import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxTypedJsModule} from 'ngx-typed-js';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
