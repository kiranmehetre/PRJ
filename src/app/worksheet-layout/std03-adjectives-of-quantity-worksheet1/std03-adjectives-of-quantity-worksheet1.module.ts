import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdjectivesOfQuantityWorksheet1Component} from './std03-adjectives-of-quantity-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03AdjectivesOfQuantityWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03AdjectivesOfQuantityWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdjectivesOfQuantityWorksheet1Module { }
