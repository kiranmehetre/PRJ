import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AbstractNounWorksheet4Component} from './std03-abstract-noun-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03AbstractNounWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03AbstractNounWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AbstractNounWorksheet4Module { }
