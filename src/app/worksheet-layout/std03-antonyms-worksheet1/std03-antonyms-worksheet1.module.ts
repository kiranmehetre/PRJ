import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet1Component} from './std03-antonyms-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03AntonymsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet1Module { }
