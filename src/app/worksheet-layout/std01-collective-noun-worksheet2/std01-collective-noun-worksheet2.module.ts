import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CollectiveNounWorksheet2RoutingModule } from './std01-collective-noun-worksheet2-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CollectiveNounWorksheet2Component } from './std01-collective-noun-worksheet2.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CollectiveNounWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01CollectiveNounWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CollectiveNounWorksheet2Module { }
