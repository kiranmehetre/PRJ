import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedTenseWorksheet3Component } from './std02-mixed-tense-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02MixedTenseWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02MixedTenseWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedTenseWorksheet3Module { }
