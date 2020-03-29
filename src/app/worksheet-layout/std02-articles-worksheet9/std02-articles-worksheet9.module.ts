import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ArticlesWorksheet9Component } from './std02-articles-worksheet9.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ArticlesWorksheet9Component }, 

];
@NgModule({
  declarations: [Std02ArticlesWorksheet9Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ArticlesWorksheet9Module { }
