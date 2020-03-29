import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet6RoutingModule } from './std01-antonyms-worksheet6-routing.module';
import { Std01AntonymsWorksheet6Component } from './std01-antonyms-worksheet6.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01AntonymsWorksheet6Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AntonymsWorksheet6Module { }
