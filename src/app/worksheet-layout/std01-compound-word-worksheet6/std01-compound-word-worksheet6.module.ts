import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet6RoutingModule } from './std01-compound-word-worksheet6-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet6Component } from './std01-compound-word-worksheet6.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CompoundWordWorksheet6Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet6Module { }
