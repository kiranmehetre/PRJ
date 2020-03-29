import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AdjectiveWorksheet8RoutingModule } from './std01-adjective-worksheet8-routing.module';
import { Std01AdjectiveWorksheet8Component } from './std01-adjective-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01AdjectiveWorksheet8Component
  }
]

@NgModule({
  declarations: [Std01AdjectiveWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AdjectiveWorksheet8Module { }
