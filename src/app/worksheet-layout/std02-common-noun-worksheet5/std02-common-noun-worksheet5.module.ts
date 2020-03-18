import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CommonNounWorksheet5Component } from './std02-common-noun-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CommonNounWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02CommonNounWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CommonNounWorksheet5Module { }
