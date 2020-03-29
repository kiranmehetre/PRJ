import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CapitalLetterWorksheet1Component } from './std02-capital-letter-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CapitalLetterWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02CapitalLetterWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CapitalLetterWorksheet1Module { }
