import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ArticlesWorksheet9RoutingModule } from './std01-articles-worksheet9-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet9Component } from './std01-articles-worksheet9.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ArticlesWorksheet9Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet9Module { }
