import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CapitalLetterWorksheet1Component} from './std03-capital-letter-worksheet1.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component:  Std03CapitalLetterWorksheet1Component}, 

];
@NgModule({
  declarations: [Std03CapitalLetterWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CapitalLetterWorksheet1Module { }
