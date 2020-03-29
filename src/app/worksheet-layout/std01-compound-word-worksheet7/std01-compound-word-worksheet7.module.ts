import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet7RoutingModule } from './std01-compound-word-worksheet7-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet7Component } from './std01-compound-word-worksheet7.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CompoundWordWorksheet7Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet7Module { }
