import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { Std01AdjectiveWorksheet3Component } from './std01-adjective-worksheet3.component';

const routes: Routes = [
  { path: '', component: Std01AdjectiveWorksheet3Component
  }

]

@NgModule({
  declarations: [Std01AdjectiveWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class Std01AdjectiveWorksheet3Module {
  constructor() {
    //console.log("Std01AdjectiveWorksheet3Component");
  }
 }
