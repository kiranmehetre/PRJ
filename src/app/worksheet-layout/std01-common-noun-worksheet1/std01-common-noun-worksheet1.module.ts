import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommonNounWorksheet1RoutingModule } from './std01-common-noun-worksheet1-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01CommonNounWorksheet1Component } from './std01-common-noun-worksheet1.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CommonNounWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01CommonNounWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CommonNounWorksheet1Module { }
