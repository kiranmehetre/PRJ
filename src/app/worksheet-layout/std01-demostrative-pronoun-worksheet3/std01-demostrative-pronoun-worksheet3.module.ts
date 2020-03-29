import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01DemostrativePronounWorksheet3RoutingModule } from './std01-demostrative-pronoun-worksheet3-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01DemostrativePronounWorksheet3Component } from './std01-demostrative-pronoun-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01DemostrativePronounWorksheet3Component
  }
]

@NgModule({
  declarations: [Std01DemostrativePronounWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01DemostrativePronounWorksheet3Module { }
