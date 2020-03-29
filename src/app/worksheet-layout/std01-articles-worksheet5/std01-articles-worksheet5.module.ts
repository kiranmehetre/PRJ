import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet5Component } from './std01-articles-worksheet5.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ArticlesWorksheet5Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet5Module { }
