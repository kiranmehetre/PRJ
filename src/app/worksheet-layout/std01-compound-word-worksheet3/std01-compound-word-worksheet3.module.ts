import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet3RoutingModule } from './std01-compound-word-worksheet3-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet3Component } from './std01-compound-word-worksheet3.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CompoundWordWorksheet3Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet3Module { }
