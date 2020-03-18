import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PastTenseWorksheet3Component } from './std02-past-tense-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PastTenseWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02PastTenseWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PastTenseWorksheet3Module { }
