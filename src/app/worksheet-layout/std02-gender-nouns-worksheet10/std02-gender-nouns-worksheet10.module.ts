import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02GenderNounsWorksheet10Component } from './std02-gender-nouns-worksheet10.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02GenderNounsWorksheet10Component }, 

];
@NgModule({
  declarations: [Std02GenderNounsWorksheet10Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02GenderNounsWorksheet10Module { }
