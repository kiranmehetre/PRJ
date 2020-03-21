import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HelpingVerbsWorksheet1Component} from './std03-helping-verbs-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03HelpingVerbsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03HelpingVerbsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HelpingVerbsWorksheet1Module { }
