import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { CorpoComponent } from './corpo/corpo.component';
import { TesteiraComponent } from './testeira/testeira.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    CorpoComponent,
    TesteiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
