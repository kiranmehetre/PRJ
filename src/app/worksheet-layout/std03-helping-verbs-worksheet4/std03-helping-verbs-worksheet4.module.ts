import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HelpingVerbsWorksheet4Component} from './std03-helping-verbs-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03HelpingVerbsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03HelpingVerbsWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HelpingVerbsWorksheet4Module { }
