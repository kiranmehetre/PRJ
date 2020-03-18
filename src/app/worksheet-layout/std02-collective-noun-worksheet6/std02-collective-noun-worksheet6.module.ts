import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CollectiveNounWorksheet6Component } from './std02-collective-noun-worksheet6.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CollectiveNounWorksheet6Component }, 

];
@NgModule({
  declarations: [Std02CollectiveNounWorksheet6Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CollectiveNounWorksheet6Module { }
