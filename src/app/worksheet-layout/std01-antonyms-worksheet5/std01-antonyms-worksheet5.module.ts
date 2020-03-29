import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet5RoutingModule } from './std01-antonyms-worksheet5-routing.module';
import { Std01AntonymsWorksheet5Component } from './std01-antonyms-worksheet5.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01AntonymsWorksheet5Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AntonymsWorksheet5Module { }
