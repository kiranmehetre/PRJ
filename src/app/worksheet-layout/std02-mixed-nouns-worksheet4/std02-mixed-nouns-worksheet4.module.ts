import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedNounsWorksheet4Component } from './std02-mixed-nouns-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02MixedNounsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02MixedNounsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedNounsWorksheet4Module { }
