import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CommonNounWorksheet1Component } from './std02-common-noun-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CommonNounWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02CommonNounWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CommonNounWorksheet1Module { }
