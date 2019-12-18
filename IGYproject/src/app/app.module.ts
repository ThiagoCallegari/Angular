import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TituloComponent } from './titulo/titulo.component';
import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { ListaCompletaComponent } from './lista-completa/lista-completa.component';
import { ListaIdComponent } from './lista-id/lista-id.component';
import { RodapeComponent } from './rodape/rodape.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TituloComponent,
    PgInicialComponent,
    ListaCompletaComponent,
    ListaIdComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
