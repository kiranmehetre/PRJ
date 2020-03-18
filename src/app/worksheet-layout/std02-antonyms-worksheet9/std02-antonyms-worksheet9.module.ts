import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AntonymsWorksheet9Component } from './std02-antonyms-worksheet9.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsWorksheet9Component}
];
@NgModule({
  declarations: [Std02AntonymsWorksheet9Component],
  imports: [
    CommonModule,RouterModule.forChild(routes) 
  ]
})
export class Std02AntonymsWorksheet9Module { }
