import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ArticlesWorksheet3RoutingModule } from './std01-articles-worksheet3-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet3Component } from './std01-articles-worksheet3.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ArticlesWorksheet3Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class Std01ArticlesWorksheet3Module { }
