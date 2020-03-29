import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CommonNounWorksheet4Component } from './std02-common-noun-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CommonNounWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02CommonNounWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CommonNounWorksheet4Module { }
