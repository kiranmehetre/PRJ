import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ConjunctionsWorksheet3RoutingModule } from './std01-conjunctions-worksheet3-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ConjunctionsWorksheet3Component } from './std01-conjunctions-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ConjunctionsWorksheet3Component
  }
]

@NgModule({
  declarations: [Std01ConjunctionsWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ConjunctionsWorksheet3Module { }
