import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ComprehensionsWorksheet5Component } from './std02-comprehensions-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ComprehensionsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02ComprehensionsWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ComprehensionsWorksheet5Module { }
