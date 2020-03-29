import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet7RoutingModule } from './std01-antonyms-worksheet7-routing.module';
import { Std01AntonymsWorksheet7Component } from './std01-antonyms-worksheet7.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01AntonymsWorksheet7Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AntonymsWorksheet7Module { }
