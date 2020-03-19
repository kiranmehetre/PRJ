import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CommonNounWorksheet2RoutingModule } from './std01-common-noun-worksheet2-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CommonNounWorksheet2Component } from './std01-common-noun-worksheet2.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CommonNounWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01CommonNounWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CommonNounWorksheet2Module { }
