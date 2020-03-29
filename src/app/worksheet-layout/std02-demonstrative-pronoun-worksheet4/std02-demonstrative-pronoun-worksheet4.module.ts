import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02DemonstrativePronounWorksheet4Component } from './std02-demonstrative-pronoun-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02DemonstrativePronounWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02DemonstrativePronounWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02DemonstrativePronounWorksheet4Module { }
