import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CapitalLetterWorksheet3Component } from './std02-capital-letter-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CapitalLetterWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02CapitalLetterWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CapitalLetterWorksheet3Module { }
