import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ComprehensionsWorksheet10RoutingModule } from './std01-comprehensions-worksheet10-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ComprehensionsWorksheet10Component } from './std01-comprehensions-worksheet10.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ComprehensionsWorksheet10Component
  }
]

@NgModule({
  declarations: [Std01ComprehensionsWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ComprehensionsWorksheet10Module { }
