import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CapitalLetterWorksheet1Component } from './std02-capital-letter-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CapitalLetterWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02CapitalLetterWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CapitalLetterWorksheet1Module { }
