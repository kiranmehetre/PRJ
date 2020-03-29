import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet1RoutingModule } from './std01-compound-word-worksheet1-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet1Component } from './std01-compound-word-worksheet1.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CompoundWordWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet1Module { }
