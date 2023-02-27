import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppMaterialModule } from './shared/app-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';

import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppMaterialModule, FlexLayoutModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, Page1Component, Page2Component, Page3Component, Page4Component, Page5Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
