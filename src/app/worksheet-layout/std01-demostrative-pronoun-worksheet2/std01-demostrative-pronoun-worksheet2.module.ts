import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01DemostrativePronounWorksheet2RoutingModule } from './std01-demostrative-pronoun-worksheet2-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01DemostrativePronounWorksheet2Component } from './std01-demostrative-pronoun-worksheet2.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01DemostrativePronounWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01DemostrativePronounWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class Std01DemostrativePronounWorksheet2Module { }
