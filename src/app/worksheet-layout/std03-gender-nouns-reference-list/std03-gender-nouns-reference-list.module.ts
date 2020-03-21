import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsReferenceListComponent} from './std03-gender-nouns-reference-list.component'
const routes: Routes = [
  { path: '', component: Std03GenderNounsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std03GenderNounsReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsReferenceListModule { }
