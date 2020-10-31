import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VocabListComponent} from './vocab-list/vocab-list.component';

const routes: Routes = [ { path: 'vocabs',component:VocabListComponent, pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
