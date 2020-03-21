import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AbstractNounsReferenceListComponent} from './std03-abstract-nouns-reference-list.component'
const routes: Routes = [
  { path: '', component: Std03AbstractNounsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std03AbstractNounsReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AbstractNounsReferenceListModule { }
