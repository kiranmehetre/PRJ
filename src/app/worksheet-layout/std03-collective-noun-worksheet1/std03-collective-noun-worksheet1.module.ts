import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CollectiveNounWorksheet1Component} from './std03-collective-noun-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03CollectiveNounWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03CollectiveNounWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CollectiveNounWorksheet1Module { }
