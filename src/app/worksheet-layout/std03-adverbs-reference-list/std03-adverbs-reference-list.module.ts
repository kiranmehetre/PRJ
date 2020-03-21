import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsReferenceListComponent} from './std03-adverbs-reference-list.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std03AdverbsReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsReferenceListModule { }
