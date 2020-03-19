import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet4RoutingModule } from './std01-compound-word-worksheet4-routing.module';


import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet4Component } from './std01-compound-word-worksheet4.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CompoundWordWorksheet4Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet4Module { }
