import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HelpingVerbsWorksheet5Component} from './std03-helping-verbs-worksheet5.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component: Std03HelpingVerbsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std03HelpingVerbsWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HelpingVerbsWorksheet5Module { }
