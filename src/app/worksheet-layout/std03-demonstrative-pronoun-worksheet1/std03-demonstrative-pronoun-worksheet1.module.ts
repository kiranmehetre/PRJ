import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03DemonstrativePronounWorksheet1Component} from './std03-demonstrative-pronoun-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03DemonstrativePronounWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03DemonstrativePronounWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03DemonstrativePronounWorksheet1Module { }
