import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01AdjectiveWorksheet4Component } from './std01-adjective-worksheet4.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  { path: "", component: Std01AdjectiveWorksheet4Component }
]

@NgModule({
  declarations: [Std01AdjectiveWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AdjectiveWorksheet4Module { }
