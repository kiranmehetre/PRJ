import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PersonalPronounsWorksheet4Component } from './std02-personal-pronouns-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PersonalPronounsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02PersonalPronounsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PersonalPronounsWorksheet4Module { }
