import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ArticlesWorksheet2RoutingModule } from './std01-articles-worksheet2-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet2Component } from './std01-articles-worksheet2.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ArticlesWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet2Module { }
