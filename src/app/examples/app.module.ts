import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonDemoModule } from './button/button-demo.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
