import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CollectiveNounWorksheet5Component} from './std03-collective-noun-worksheet5.component'
const routes: Routes = [
  { path: '', component: Std03CollectiveNounWorksheet5Component }, 

];
@NgModule({
  declarations: [Std03CollectiveNounWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CollectiveNounWorksheet5Module { }
