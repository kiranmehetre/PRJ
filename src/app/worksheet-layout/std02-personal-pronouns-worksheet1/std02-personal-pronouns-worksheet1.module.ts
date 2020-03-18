import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PersonalPronounsWorksheet1Component } from './std02-personal-pronouns-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PersonalPronounsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02PersonalPronounsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PersonalPronounsWorksheet1Module { }
