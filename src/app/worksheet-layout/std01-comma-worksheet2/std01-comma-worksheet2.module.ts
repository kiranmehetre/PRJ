import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommaWorksheet2RoutingModule } from './std01-comma-worksheet2-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CommaWorksheet2Component } from './std01-comma-worksheet2.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CommaWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01CommaWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CommaWorksheet2Module { }
