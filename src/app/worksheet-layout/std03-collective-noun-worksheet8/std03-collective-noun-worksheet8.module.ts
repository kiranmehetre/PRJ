import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CollectiveNounWorksheet8Component} from './std03-collective-noun-worksheet8.component'
const routes: Routes = [
  { path: '', component: Std03CollectiveNounWorksheet8Component }, 

];
@NgModule({
  declarations: [Std03CollectiveNounWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CollectiveNounWorksheet8Module { }
