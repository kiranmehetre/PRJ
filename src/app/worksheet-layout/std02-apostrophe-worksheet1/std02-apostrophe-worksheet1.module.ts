import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ApostropheWorksheet1Component } from './std02-apostrophe-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ApostropheWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02ApostropheWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ApostropheWorksheet1Module { }
