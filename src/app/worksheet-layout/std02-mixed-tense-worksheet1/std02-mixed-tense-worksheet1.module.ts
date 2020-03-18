import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedTenseWorksheet1Component } from './std02-mixed-tense-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02MixedTenseWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02MixedTenseWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedTenseWorksheet1Module { }
