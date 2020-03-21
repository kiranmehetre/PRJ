import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HelpingVerbsWorksheet3Component} from './std03-helping-verbs-worksheet3.component'
const routes: Routes = [
  { path: '', component:Std03HelpingVerbsWorksheet3Component  }, 

];
@NgModule({
  declarations: [Std03HelpingVerbsWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HelpingVerbsWorksheet3Module { }
