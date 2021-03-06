import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SliderComponent } from './components/slider/slider.component';

import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
