import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ConjunctionsWorksheet5RoutingModule } from './std01-conjunctions-worksheet5-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ConjunctionsWorksheet5Component } from './std01-conjunctions-worksheet5.component';

const routes: Routes = [
  {
    path: "",
    component: Std01ConjunctionsWorksheet5Component
  }
]

@NgModule({
  declarations: [Std01ConjunctionsWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ConjunctionsWorksheet5Module { }
