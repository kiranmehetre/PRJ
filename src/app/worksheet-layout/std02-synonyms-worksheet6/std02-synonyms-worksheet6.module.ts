import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SynonymsWorksheet6Component } from './std02-synonyms-worksheet6.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02SynonymsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std02SynonymsWorksheet6Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SynonymsWorksheet6Module { }
