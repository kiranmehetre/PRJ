import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ArticlesWorksheet10RoutingModule } from './std01-articles-worksheet10-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet10Component } from './std01-articles-worksheet10.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01ArticlesWorksheet10Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet10Module { }
