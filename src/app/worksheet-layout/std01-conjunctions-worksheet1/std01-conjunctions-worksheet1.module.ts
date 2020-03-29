import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ConjunctionsWorksheet1RoutingModule } from './std01-conjunctions-worksheet1-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ConjunctionsWorksheet1Component } from './std01-conjunctions-worksheet1.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ConjunctionsWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01ConjunctionsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ConjunctionsWorksheet1Module { }
