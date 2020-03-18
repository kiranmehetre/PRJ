import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Std02AntonymsWorksheet4Component } from './std02-antonyms-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02AntonymsWorksheet4Component],
  imports: [
    CommonModule, RouterModule.forChild(routes) 
  ]
})
export class Std02AntonymsWorksheet4Module { }
