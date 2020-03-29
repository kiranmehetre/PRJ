import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdjectivesOfQuantityWorksheet2Component} from './std03-adjectives-of-quantity-worksheet2.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component: Std03AdjectivesOfQuantityWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03AdjectivesOfQuantityWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdjectivesOfQuantityWorksheet2Module { }
