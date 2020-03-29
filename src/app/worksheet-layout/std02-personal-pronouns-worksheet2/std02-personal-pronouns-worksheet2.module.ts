import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PersonalPronounsWorksheet2Component } from './std02-personal-pronouns-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02PersonalPronounsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02PersonalPronounsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PersonalPronounsWorksheet2Module { }
