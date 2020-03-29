import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedPunctuationWorksheet1Component } from './std02-mixed-punctuation-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02MixedPunctuationWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02MixedPunctuationWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedPunctuationWorksheet1Module { }
