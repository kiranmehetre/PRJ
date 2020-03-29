import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PastTenseWorksheet2Component } from './std02-past-tense-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02PastTenseWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02PastTenseWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PastTenseWorksheet2Module { }
