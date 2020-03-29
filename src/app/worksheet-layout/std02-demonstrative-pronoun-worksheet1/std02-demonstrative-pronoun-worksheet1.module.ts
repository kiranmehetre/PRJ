import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02DemonstrativePronounWorksheet1Component } from './std02-demonstrative-pronoun-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02DemonstrativePronounWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02DemonstrativePronounWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02DemonstrativePronounWorksheet1Module { }
