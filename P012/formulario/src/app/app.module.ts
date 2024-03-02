import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { InformacoesUsuarioComponent } from './informacoes-usuario/informacoes-usuario.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent,
    InformacoesUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers:[
    provideAnimationsAsync()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
