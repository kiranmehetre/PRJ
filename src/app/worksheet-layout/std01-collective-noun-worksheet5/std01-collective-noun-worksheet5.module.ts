import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CollectiveNounWorksheet5RoutingModule } from './std01-collective-noun-worksheet5-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01CollectiveNounWorksheet5Component } from './std01-collective-noun-worksheet5.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CollectiveNounWorksheet5Component
  }
]

@NgModule({
  declarations: [Std01CollectiveNounWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CollectiveNounWorksheet5Module { }
