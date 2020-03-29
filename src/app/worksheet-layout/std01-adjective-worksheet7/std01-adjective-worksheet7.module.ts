import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AdjectiveWorksheet7RoutingModule } from './std01-adjective-worksheet7-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01AdjectiveWorksheet7Component } from './std01-adjective-worksheet7.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01AdjectiveWorksheet7Component
  }
];
@NgModule({
  declarations: [Std01AdjectiveWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AdjectiveWorksheet7Module { }
