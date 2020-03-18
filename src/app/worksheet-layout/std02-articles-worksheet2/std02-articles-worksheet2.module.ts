import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ArticlesWorksheet2Component } from './std02-articles-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ArticlesWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02ArticlesWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ArticlesWorksheet2Module { }
