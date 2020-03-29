import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ArticlesWorksheet8RoutingModule } from './std01-articles-worksheet8-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet8Component } from './std01-articles-worksheet8.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ArticlesWorksheet8Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet8Module { }
