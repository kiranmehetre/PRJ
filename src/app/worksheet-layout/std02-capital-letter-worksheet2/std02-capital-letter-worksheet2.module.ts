import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CapitalLetterWorksheet2Component } from './std02-capital-letter-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CapitalLetterWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02CapitalLetterWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CapitalLetterWorksheet2Module { }
