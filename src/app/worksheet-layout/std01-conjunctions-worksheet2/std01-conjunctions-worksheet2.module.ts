import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ConjunctionsWorksheet2RoutingModule } from './std01-conjunctions-worksheet2-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01ConjunctionsWorksheet2Component } from './std01-conjunctions-worksheet2.component';

const routes: Routes = [
  {
    path: "",
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
