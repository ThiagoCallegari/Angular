import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorpoComponent } from './corpo/corpo.component';
import { BuscaComponent } from './busca/busca.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [

  { path: '', redirectTo: 'corpo', pathMatch: 'full' },
  { path: 'corpo', component: CorpoComponent},
  { path: 'busca', component: BuscaComponent},
  { path: 'tarefas', component: TarefasComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
