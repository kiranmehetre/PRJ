import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CollectiveNounsReferenceListComponent} from './std03-collective-nouns-reference-list.component'
const routes: Routes = [
  { path: '', component: Std03CollectiveNounsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std03CollectiveNounsReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CollectiveNounsReferenceListModule { }
