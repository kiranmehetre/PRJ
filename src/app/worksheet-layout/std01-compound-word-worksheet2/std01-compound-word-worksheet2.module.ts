import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet2RoutingModule } from './std01-compound-word-worksheet2-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet2Component } from './std01-compound-word-worksheet2.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CompoundWordWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet2Module { }
