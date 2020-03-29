import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommonNounWorksheet3RoutingModule } from './std01-common-noun-worksheet3-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CommonNounWorksheet3Component } from './std01-common-noun-worksheet3.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CommonNounWorksheet3Component
  }
]

@NgModule({
  declarations: [Std01CommonNounWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CommonNounWorksheet3Module { }
