import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedTenseWorksheet1Component } from './std02-mixed-tense-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02MixedTenseWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02MixedTenseWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedTenseWorksheet1Module { }
