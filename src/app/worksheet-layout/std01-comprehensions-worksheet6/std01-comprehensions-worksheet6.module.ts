import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet6RoutingModule } from './std01-comprehensions-worksheet6-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet6Component } from './std01-comprehensions-worksheet6.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ComprehensionsWorksheet6Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet6Module { }
