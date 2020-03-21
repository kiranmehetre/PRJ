import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AbstractNounWorksheet3Component} from './std03-abstract-noun-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03AbstractNounWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03AbstractNounWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AbstractNounWorksheet3Module { }
