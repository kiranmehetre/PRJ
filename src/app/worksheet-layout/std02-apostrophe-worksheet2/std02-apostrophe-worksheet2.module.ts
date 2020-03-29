import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ApostropheWorksheet2Component } from './std02-apostrophe-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ApostropheWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02ApostropheWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ApostropheWorksheet2Module { }
