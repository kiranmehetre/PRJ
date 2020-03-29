import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ConjunctionsWorksheet4RoutingModule } from './std01-conjunctions-worksheet4-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ConjunctionsWorksheet4Component } from './std01-conjunctions-worksheet4.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ConjunctionsWorksheet4Component
  }
]

@NgModule({
  declarations: [Std01ConjunctionsWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ConjunctionsWorksheet4Module { }
