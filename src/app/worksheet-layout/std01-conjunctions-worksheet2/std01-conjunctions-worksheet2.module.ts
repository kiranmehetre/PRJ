import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ConjunctionsWorksheet2RoutingModule } from './std01-conjunctions-worksheet2-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01ConjunctionsWorksheet2Component } from './std01-conjunctions-worksheet2.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ConjunctionsWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01ConjunctionsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ConjunctionsWorksheet2Module { }
