import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CommonNounWorksheet2Component } from './std02-common-noun-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CommonNounWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02CommonNounWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CommonNounWorksheet2Module { }
