import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CollectiveNounWorksheet3Component} from './std03-collective-noun-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03CollectiveNounWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03CollectiveNounWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CollectiveNounWorksheet3Module { }
