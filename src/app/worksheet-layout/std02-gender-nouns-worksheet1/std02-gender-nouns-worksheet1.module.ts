import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02GenderNounsWorksheet1Component } from './std02-gender-nouns-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02GenderNounsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02GenderNounsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02GenderNounsWorksheet1Module { }
