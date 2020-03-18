import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AntonymsWorksheet3Component } from './std02-antonyms-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02AntonymsWorksheet3Component],
  imports: [
    CommonModule,  RouterModule.forChild(routes) 
  ]
})
export class Std02AntonymsWorksheet3Module { }
