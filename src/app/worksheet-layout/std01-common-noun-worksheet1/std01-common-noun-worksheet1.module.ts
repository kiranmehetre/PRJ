import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommonNounWorksheet1RoutingModule } from './std01-common-noun-worksheet1-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01CommonNounWorksheet1Component } from './std01-common-noun-worksheet1.component';


const routes: Routes = [
  {
    path: "",
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
