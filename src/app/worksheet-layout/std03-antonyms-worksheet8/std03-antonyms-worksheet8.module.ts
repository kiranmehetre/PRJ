import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet8Component} from './std03-antonyms-worksheet8.component'
const routes: Routes = [
  { path: '', component: Std03AntonymsWorksheet8Component }, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet8Module { }
