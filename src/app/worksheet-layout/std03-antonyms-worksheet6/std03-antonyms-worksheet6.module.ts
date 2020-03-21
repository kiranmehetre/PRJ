import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet6Component} from './std03-antonyms-worksheet6.component'
const routes: Routes = [
  { path: '', component:  Std03AntonymsWorksheet6Component}, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet6Module { }
