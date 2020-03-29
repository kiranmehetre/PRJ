import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommonNounWorksheet5RoutingModule } from './std01-common-noun-worksheet5-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CommonNounWorksheet5Component } from './std01-common-noun-worksheet5.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CommonNounWorksheet5Component
  }
]

@NgModule({
  declarations: [Std01CommonNounWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CommonNounWorksheet5Module { }
