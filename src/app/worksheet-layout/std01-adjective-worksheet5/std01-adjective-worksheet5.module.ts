import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AdjectiveWorksheet5Component } from './std01-adjective-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassOneAuth], component: Std01AdjectiveWorksheet5Component
  }

]
@NgModule({
  declarations: [Std01AdjectiveWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AdjectiveWorksheet5Module { }
