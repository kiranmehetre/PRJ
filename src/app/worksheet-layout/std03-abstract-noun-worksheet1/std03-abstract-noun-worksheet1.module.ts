import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AbstractNounWorksheet1Component } from './std03-abstract-noun-worksheet1.component'
const routes: Routes = [
  { path: '', component:  Std03AbstractNounWorksheet1Component}, 

];
@NgModule({
  declarations: [Std03AbstractNounWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AbstractNounWorksheet1Module { }
