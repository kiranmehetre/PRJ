import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedNounsWorksheet5Component } from './std02-mixed-nouns-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02MixedNounsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02MixedNounsWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedNounsWorksheet5Module { }
