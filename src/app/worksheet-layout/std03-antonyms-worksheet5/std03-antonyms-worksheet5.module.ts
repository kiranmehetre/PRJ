import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet5Component} from './std03-antonyms-worksheet5.component'
const routes: Routes = [
  { path: '', component: Std03AntonymsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet5Module { }
