import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ErrorComponent } from './error/error.component';
import { PaginadeInicioComponent } from './paginade-inicio/paginade-inicio.component';

const routes: Routes = [
  {path: '', component: PaginadeInicioComponent},
  {path: 'Cronometro', component: CronometroComponent},
  {path: 'Saludo', component: SaludoComponent},

  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
