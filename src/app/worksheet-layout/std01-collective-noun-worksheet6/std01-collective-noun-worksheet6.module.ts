import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CollectiveNounWorksheet6RoutingModule } from './std01-collective-noun-worksheet6-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CollectiveNounWorksheet6Component } from './std01-collective-noun-worksheet6.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CollectiveNounWorksheet6Component
  }
]

@NgModule({
  declarations: [Std01CollectiveNounWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CollectiveNounWorksheet6Module { }
