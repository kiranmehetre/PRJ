import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdjectivesOfQuantityWorksheet2Component} from './std03-adjectives-of-quantity-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03AdjectivesOfQuantityWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03AdjectivesOfQuantityWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdjectivesOfQuantityWorksheet2Module { }
