import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CollectiveNounWorksheet8RoutingModule } from './std01-collective-noun-worksheet8-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01CollectiveNounWorksheet8Component } from './std01-collective-noun-worksheet8.component';
import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
    path: "",canActivate: [ClassOneAuth],
    component: Std01CollectiveNounWorksheet8Component
  }
]

@NgModule({
  declarations: [Std01CollectiveNounWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CollectiveNounWorksheet8Module { }
