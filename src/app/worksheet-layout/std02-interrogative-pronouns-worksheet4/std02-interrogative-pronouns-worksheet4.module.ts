import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02InterrogativePronounsWorksheet4Component } from './std02-interrogative-pronouns-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02InterrogativePronounsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02InterrogativePronounsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02InterrogativePronounsWorksheet4Module { }
