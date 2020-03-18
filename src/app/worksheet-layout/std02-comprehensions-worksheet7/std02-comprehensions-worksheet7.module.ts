import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ComprehensionsWorksheet7Component } from './std02-comprehensions-worksheet7.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ComprehensionsWorksheet7Component }, 

];
@NgModule({
  declarations: [Std02ComprehensionsWorksheet7Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ComprehensionsWorksheet7Module { }
