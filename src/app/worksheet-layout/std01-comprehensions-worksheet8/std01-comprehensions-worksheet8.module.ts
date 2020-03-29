import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet8RoutingModule } from './std01-comprehensions-worksheet8-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet8Component } from './std01-comprehensions-worksheet8.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ComprehensionsWorksheet8Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet8Module { }
