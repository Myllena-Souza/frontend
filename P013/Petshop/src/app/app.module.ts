import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { DetalharAtendimentoComponent } from './detalhar-atendimento/detalhar-atendimento.component';
import { EditarAtendimentoComponent } from './editar-atendimento/editar-atendimento.component';
import { ListarAtendimentoComponent } from './listar-atendimento/listar-atendimento.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent,
    DetalharAtendimentoComponent,
    EditarAtendimentoComponent,
    ListarAtendimentoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
