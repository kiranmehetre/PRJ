import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ConjunctionsWorksheet6RoutingModule } from './std01-conjunctions-worksheet6-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ConjunctionsWorksheet6Component } from './std01-conjunctions-worksheet6.component';

const routes: Routes = [
  {
    path: "",
    component: Std01ConjunctionsWorksheet6Component
  }
]

@NgModule({
  declarations: [Std01ConjunctionsWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ConjunctionsWorksheet6Module { }
