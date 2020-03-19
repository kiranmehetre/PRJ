import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet8RoutingModule } from './std01-compound-word-worksheet8-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet8Component } from './std01-compound-word-worksheet8.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CompoundWordWorksheet8Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet8Module { }
