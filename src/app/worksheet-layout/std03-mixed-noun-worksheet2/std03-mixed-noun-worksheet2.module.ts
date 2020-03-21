import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedNounWorksheet2Component} from './std03-mixed-noun-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03MixedNounWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03MixedNounWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedNounWorksheet2Module { }
