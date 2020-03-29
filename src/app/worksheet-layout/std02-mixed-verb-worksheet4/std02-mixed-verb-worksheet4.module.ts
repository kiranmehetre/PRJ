import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedVerbWorksheet4Component } from './std02-mixed-verb-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02MixedVerbWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02MixedVerbWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedVerbWorksheet4Module { }
