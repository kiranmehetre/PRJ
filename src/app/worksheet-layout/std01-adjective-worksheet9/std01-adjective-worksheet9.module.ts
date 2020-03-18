import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AdjectiveWorksheet9RoutingModule } from './std01-adjective-worksheet9-routing.module';
import { RouterModule } from '@angular/router';
import { Std01AdjectiveWorksheet9Component } from './std01-adjective-worksheet9.component';
const routes = [
  {
    path: "",
    component: Std01AdjectiveWorksheet9Component
  }
]

@NgModule({
  declarations: [Std01AdjectiveWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    // Std01AdjectiveWorksheet9RoutingModule
  ]
})
export class Std01AdjectiveWorksheet9Module { }
