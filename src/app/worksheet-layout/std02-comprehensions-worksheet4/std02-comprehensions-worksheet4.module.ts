import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ComprehensionsWorksheet4Component } from './std02-comprehensions-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ComprehensionsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02ComprehensionsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ComprehensionsWorksheet4Module { }
