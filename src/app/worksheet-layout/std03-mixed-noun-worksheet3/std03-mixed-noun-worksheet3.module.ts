import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedNounWorksheet3Component} from './std03-mixed-noun-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03MixedNounWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03MixedNounWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedNounWorksheet3Module { }
