import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet5RoutingModule } from './std01-comprehensions-worksheet5-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet5Component } from './std01-comprehensions-worksheet5.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ComprehensionsWorksheet5Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet5Module { }
