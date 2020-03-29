import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AdjectiveWorksheet10RoutingModule } from './std01-adjective-worksheet10-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01AdjectiveWorksheet10Component } from './std01-adjective-worksheet10.component';
import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01AdjectiveWorksheet10Component
  }
]

@NgModule({
  declarations: [Std01AdjectiveWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    // Std01AdjectiveWorksheet10RoutingModule
  ]
})
export class Std01AdjectiveWorksheet10Module { }
