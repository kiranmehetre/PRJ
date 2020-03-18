import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CollectiveNounWorksheet3Component } from './std02-collective-noun-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CollectiveNounWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02CollectiveNounWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CollectiveNounWorksheet3Module { }
