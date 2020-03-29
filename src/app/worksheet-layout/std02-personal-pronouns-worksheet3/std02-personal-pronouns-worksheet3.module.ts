import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PersonalPronounsWorksheet3Component } from './std02-personal-pronouns-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02PersonalPronounsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02PersonalPronounsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PersonalPronounsWorksheet3Module { }
