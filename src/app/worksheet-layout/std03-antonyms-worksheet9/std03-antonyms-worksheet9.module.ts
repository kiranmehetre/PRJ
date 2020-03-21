import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet9Component} from './std03-antonyms-worksheet9.component'
const routes: Routes = [
  { path: '', component: Std03AntonymsWorksheet9Component }, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet9Module { }
