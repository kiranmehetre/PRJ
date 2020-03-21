import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet2Component} from './std03-antonyms-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03AntonymsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet2Module { }
