import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01DemostrativePronounWorksheet5RoutingModule } from './std01-demostrative-pronoun-worksheet5-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01DemostrativePronounWorksheet5Component } from './std01-demostrative-pronoun-worksheet5.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01DemostrativePronounWorksheet5Component
  }
]

@NgModule({
  declarations: [Std01DemostrativePronounWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01DemostrativePronounWorksheet5Module { }
