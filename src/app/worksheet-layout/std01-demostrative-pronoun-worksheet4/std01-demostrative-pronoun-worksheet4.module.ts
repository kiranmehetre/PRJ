import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01DemostrativePronounWorksheet4RoutingModule } from './std01-demostrative-pronoun-worksheet4-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01DemostrativePronounWorksheet4Component } from './std01-demostrative-pronoun-worksheet4.component';

const routes: Routes = [
  {
    path: "",
    component: Std01DemostrativePronounWorksheet4Component
  }
]

@NgModule({
  declarations: [Std01DemostrativePronounWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01DemostrativePronounWorksheet4Module { }
