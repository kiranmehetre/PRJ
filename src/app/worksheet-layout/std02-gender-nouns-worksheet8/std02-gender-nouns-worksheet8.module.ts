import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02GenderNounsWorksheet8Component } from './std02-gender-nouns-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02GenderNounsWorksheet8Component }, 

];
@NgModule({
  declarations: [Std02GenderNounsWorksheet8Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02GenderNounsWorksheet8Module { }
