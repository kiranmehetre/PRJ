import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet3RoutingModule } from './std01-comprehensions-worksheet3-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet3Component } from './std01-comprehensions-worksheet3.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ComprehensionsWorksheet3Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet3Module { }
