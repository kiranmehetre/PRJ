import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ArticlesWorksheet10Component } from './std02-articles-worksheet10.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ArticlesWorksheet10Component }, 

];
@NgModule({
  declarations: [Std02ArticlesWorksheet10Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ArticlesWorksheet10Module { }
