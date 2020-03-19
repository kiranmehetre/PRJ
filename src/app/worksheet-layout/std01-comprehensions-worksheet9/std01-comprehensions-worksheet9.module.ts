import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet9RoutingModule } from './std01-comprehensions-worksheet9-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet9Component } from './std01-comprehensions-worksheet9.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ComprehensionsWorksheet9Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet9Module { }
