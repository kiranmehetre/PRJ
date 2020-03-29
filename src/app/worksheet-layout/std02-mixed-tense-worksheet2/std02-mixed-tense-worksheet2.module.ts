import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedTenseWorksheet2Component } from './std02-mixed-tense-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02MixedTenseWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02MixedTenseWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedTenseWorksheet2Module { }
