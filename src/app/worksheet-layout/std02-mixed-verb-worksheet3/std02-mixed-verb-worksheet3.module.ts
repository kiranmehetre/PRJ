import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedVerbWorksheet3Component } from './std02-mixed-verb-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02MixedVerbWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02MixedVerbWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedVerbWorksheet3Module { }
