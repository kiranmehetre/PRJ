import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedNounWorksheet4Component} from './std03-mixed-noun-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03MixedNounWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03MixedNounWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedNounWorksheet4Module { }
