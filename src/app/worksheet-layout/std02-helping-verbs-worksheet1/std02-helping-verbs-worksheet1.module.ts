import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HelpingVerbsWorksheet1Component } from './std02-helping-verbs-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02HelpingVerbsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02HelpingVerbsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HelpingVerbsWorksheet1Module { }
