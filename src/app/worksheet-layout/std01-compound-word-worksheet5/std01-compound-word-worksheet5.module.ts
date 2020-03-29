import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet5RoutingModule } from './std01-compound-word-worksheet5-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet5Component } from './std01-compound-word-worksheet5.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CompoundWordWorksheet5Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet5Module { }
