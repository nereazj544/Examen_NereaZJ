import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//! Componetnes
import { CronometroComponent } from './cronometro/cronometro.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ErrorComponent } from './error/error.component';
import { LapsoComponent } from './lapso/lapso.component';


//! Import de Angular Matirial
import {MatToolbarModule} from '@angular/material/toolbar';
import { PaginadeInicioComponent } from './paginade-inicio/paginade-inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
    SaludoComponent,
    ErrorComponent,
    LapsoComponent,
    PaginadeInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
