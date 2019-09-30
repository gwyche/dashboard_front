import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormaComponent } from './forma/forma.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { Main2Component } from './main2/main2.component';
import { Main3Component } from './main3/main3.component';
import { FormbComponent } from './formb/formb.component';
import { FormcComponent } from './formc/formc.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormaComponent,
    Main2Component,
    Main3Component,
    FormbComponent,
    FormcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
