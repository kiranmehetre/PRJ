import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ComprehensionsWorksheet10Component } from './std02-comprehensions-worksheet10.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ComprehensionsWorksheet10Component }, 

];
@NgModule({
  declarations: [Std02ComprehensionsWorksheet10Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ComprehensionsWorksheet10Module { }
