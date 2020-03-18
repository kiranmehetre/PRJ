import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   Std02AntonymsWorksheet7Component} from './std02-antonyms-worksheet7.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsWorksheet7Component }, 

];
@NgModule({
  declarations: [Std02AntonymsWorksheet7Component],
  imports: [
    CommonModule,RouterModule.forChild(routes) 
  ]
})
export class Std02AntonymsWorksheet7Module { }
