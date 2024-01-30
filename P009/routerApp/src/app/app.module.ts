import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { SiteuescComponent } from './siteuesc/siteuesc.component';
import { WikiComponent } from './wiki/wiki.component';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { ResultadoPesquisaComponent } from './resultado-pesquisa/resultado-pesquisa.component';
import { JreaderComponent } from './jreader/jreader.component';

@NgModule({
  declarations: [
    AppComponent,
    RoteirosComponent,
    SiteuescComponent,
    WikiComponent,
    BarraDeBuscaComponent,
    ResultadoPesquisaComponent,
    JreaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
