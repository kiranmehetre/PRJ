import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet10Component} from './std03-adverbs-worksheet10.component'
const routes: Routes = [
  { path: '', component:  Std03AdverbsWorksheet10Component}, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet10Module { }
