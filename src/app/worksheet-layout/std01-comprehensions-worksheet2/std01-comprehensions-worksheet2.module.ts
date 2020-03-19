import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet2RoutingModule } from './std01-comprehensions-worksheet2-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet2Component } from './std01-comprehensions-worksheet2.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ComprehensionsWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet2Module { }
