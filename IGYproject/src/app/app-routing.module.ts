import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { ListaCompletaComponent } from './lista-completa/lista-completa.component';
import { ListaIdComponent } from './lista-id/lista-id.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PgInicialComponent },
  { path: 'listafull', component: ListaCompletaComponent },
  { path: 'listaid', component: ListaIdComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
