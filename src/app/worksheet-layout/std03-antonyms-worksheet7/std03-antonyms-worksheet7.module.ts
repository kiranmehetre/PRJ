import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet7Component} from './std03-antonyms-worksheet7.component'
const routes: Routes = [
  { path: '', component: Std03AntonymsWorksheet7Component }, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet7Module { }
