import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PastTenseWorksheet1Component } from './std02-past-tense-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PastTenseWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02PastTenseWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PastTenseWorksheet1Module { }
