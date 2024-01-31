import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiComponent } from './wiki/wiki.component';
import { JReaderComponent } from './jreader/jreader.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { SiteuescComponent } from './siteuesc/siteuesc.component';

const routesAPP: Routes = [
  { path: 'wiki', component: WikiComponent},
  { path: 'jreader', component: JReaderComponent},
  { path: 'roteiros', component: RoteirosComponent},
  { path: 'siteuesc', component: SiteuescComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routesAPP)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
