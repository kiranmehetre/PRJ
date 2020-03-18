import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02GenderNounsWorksheet6Component } from './std02-gender-nouns-worksheet6.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02GenderNounsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std02GenderNounsWorksheet6Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02GenderNounsWorksheet6Module { }
