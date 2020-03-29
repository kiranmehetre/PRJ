import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SingularPluralNounsWorksheet9Component } from './std02-singular-plural-nouns-worksheet9.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02SingularPluralNounsWorksheet9Component }, 

];
@NgModule({
  declarations: [Std02SingularPluralNounsWorksheet9Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SingularPluralNounsWorksheet9Module { }
