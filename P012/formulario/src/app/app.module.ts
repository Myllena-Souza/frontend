import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { InformacoesUsuarioComponent } from './informacoes-usuario/informacoes-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent,
    InformacoesUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
