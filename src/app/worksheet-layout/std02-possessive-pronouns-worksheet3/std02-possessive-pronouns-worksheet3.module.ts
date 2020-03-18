import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PossessivePronounsWorksheet3Component } from './std02-possessive-pronouns-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PossessivePronounsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02PossessivePronounsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PossessivePronounsWorksheet3Module { }
