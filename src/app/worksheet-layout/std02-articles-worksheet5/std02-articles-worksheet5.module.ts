import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ArticlesWorksheet5Component } from './std02-articles-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ArticlesWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02ArticlesWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ArticlesWorksheet5Module { }
