import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PresentTenseWorksheet2Component } from './std02-present-tense-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PresentTenseWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02PresentTenseWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PresentTenseWorksheet2Module { }
