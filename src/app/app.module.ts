import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { DashbordMenuComponent } from './dashbord-menu/dashbord-menu.component';


import {SharedModules} from '../shread_modules/shared-modules'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    DashbordMenuComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    SharedModules


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
