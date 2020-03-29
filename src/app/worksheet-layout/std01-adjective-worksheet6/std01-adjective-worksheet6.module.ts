import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AdjectiveWorksheet6RoutingModule } from './std01-adjective-worksheet6-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { Std01AdjectiveWorksheet6Component } from './std01-adjective-worksheet6.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  { path: "", component: Std01AdjectiveWorksheet6Component }
]

@NgModule({
  declarations: [Std01AdjectiveWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AdjectiveWorksheet6Module { }
