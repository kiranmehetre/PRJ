import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommonNounWorksheet4RoutingModule } from './std01-common-noun-worksheet4-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CommonNounWorksheet4Component } from './std01-common-noun-worksheet4.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CommonNounWorksheet4Component
  }
]

@NgModule({
  declarations: [Std01CommonNounWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CommonNounWorksheet4Module { }
