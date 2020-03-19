import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CollectiveNounWorksheet9RoutingModule } from './std01-collective-noun-worksheet9-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CollectiveNounWorksheet9Component } from './std01-collective-noun-worksheet9.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CollectiveNounWorksheet9Component
  }
]

@NgModule({
  declarations: [Std01CollectiveNounWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CollectiveNounWorksheet9Module { }
