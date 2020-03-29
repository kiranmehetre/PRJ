import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdjectivesWorksheet9Component } from './std02-adjectives-worksheet9.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02AdjectivesWorksheet9Component }, 

];
@NgModule({
  declarations: [Std02AdjectivesWorksheet9Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdjectivesWorksheet9Module { }
