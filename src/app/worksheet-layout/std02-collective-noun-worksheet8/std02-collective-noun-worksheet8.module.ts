import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CollectiveNounWorksheet8Component } from './std02-collective-noun-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CollectiveNounWorksheet8Component }, 

];
@NgModule({
  declarations: [Std02CollectiveNounWorksheet8Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CollectiveNounWorksheet8Module { }
