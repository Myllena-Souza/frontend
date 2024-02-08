import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsenhaComponent } from './logsenha/logsenha.component';
import { FormReativoComponent } from './formularioreativo/formularioreativo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsenhaComponent,
    FormReativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
