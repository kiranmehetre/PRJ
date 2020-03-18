import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Std02AntonymsWorksheet5Component  } from './std02-antonyms-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02AntonymsWorksheet5Component],
  imports: [
    CommonModule, RouterModule.forChild(routes) 
  ]
})
export class Std02AntonymsWorksheet5Module { }
