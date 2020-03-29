import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedPunctuationWorksheet3Component } from './std02-mixed-punctuation-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02MixedPunctuationWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02MixedPunctuationWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedPunctuationWorksheet3Module { }
