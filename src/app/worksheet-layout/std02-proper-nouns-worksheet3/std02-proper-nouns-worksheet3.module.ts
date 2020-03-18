import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ProperNounsWorksheet3Component } from './std02-proper-nouns-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ProperNounsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02ProperNounsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ProperNounsWorksheet3Module { }
