import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet7RoutingModule } from './std01-comprehensions-worksheet7-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet7Component } from './std01-comprehensions-worksheet7.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ComprehensionsWorksheet7Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet7Module { }
