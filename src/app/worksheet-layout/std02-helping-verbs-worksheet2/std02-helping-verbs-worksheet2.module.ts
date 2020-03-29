import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HelpingVerbsWorksheet2Component } from './std02-helping-verbs-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02HelpingVerbsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02HelpingVerbsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HelpingVerbsWorksheet2Module { }
