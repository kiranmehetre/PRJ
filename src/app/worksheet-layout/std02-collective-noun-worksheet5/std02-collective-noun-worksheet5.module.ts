import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CollectiveNounWorksheet5Component } from './std02-collective-noun-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CollectiveNounWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02CollectiveNounWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CollectiveNounWorksheet5Module { }
