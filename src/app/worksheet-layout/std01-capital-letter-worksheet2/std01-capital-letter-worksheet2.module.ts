import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CapitalLetterWorksheet2RoutingModule } from './std01-capital-letter-worksheet2-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CapitalLetterWorksheet2Component } from './std01-capital-letter-worksheet2.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CapitalLetterWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01CapitalLetterWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CapitalLetterWorksheet2Module { }
