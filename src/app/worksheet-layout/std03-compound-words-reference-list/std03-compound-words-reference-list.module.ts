import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordsReferenceListComponent} from './std03-compound-words-reference-list.component'
const routes: Routes = [
  { path: '', component: Std03CompoundWordsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std03CompoundWordsReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordsReferenceListModule { }
