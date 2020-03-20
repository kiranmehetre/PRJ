import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet1RoutingModule } from './std01-comprehensions-worksheet1-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet1Component } from './std01-comprehensions-worksheet1.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ComprehensionsWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet1Module { }
