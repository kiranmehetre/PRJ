import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommonNounWorksheet2RoutingModule } from './std01-common-noun-worksheet2-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CommonNounWorksheet2Component } from './std01-common-noun-worksheet2.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CommonNounWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01CommonNounWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CommonNounWorksheet2Module { }
