import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedNounsWorksheet3Component } from './std02-mixed-nouns-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02MixedNounsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02MixedNounsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedNounsWorksheet3Module { }
