import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PresentTenseWorksheet4Component } from './std02-present-tense-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PresentTenseWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02PresentTenseWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PresentTenseWorksheet4Module { }
