import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommaWorksheet1RoutingModule } from './std01-comma-worksheet1-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CommaWorksheet1Component } from './std01-comma-worksheet1.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CommaWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01CommaWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CommaWorksheet1Module { }
