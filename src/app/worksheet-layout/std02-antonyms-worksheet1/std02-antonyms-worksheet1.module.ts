import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Std02AntonymsWorksheet1Component} from "./std02-antonyms-worksheet1.component"
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02AntonymsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  
})
export class Std02AntonymsWorksheet1Module { }
