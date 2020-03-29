import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedTenseWorksheet4Component } from './std02-mixed-tense-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02MixedTenseWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02MixedTenseWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedTenseWorksheet4Module { }
