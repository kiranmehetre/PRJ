import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PresentTenseWorksheet1Component } from './std02-present-tense-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PresentTenseWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02PresentTenseWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PresentTenseWorksheet1Module { }
