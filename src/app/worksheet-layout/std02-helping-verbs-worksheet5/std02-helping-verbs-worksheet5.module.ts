import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HelpingVerbsWorksheet5Component } from './std02-helping-verbs-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02HelpingVerbsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02HelpingVerbsWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HelpingVerbsWorksheet5Module { }
