import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordWorksheet9RoutingModule } from './std01-compound-word-worksheet9-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordWorksheet9Component } from './std01-compound-word-worksheet9.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CompoundWordWorksheet9Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordWorksheet9Module { }
