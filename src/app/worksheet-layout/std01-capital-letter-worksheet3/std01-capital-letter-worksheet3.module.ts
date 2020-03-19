import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CapitalLetterWorksheet3RoutingModule } from './std01-capital-letter-worksheet3-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CapitalLetterWorksheet3Component } from './std01-capital-letter-worksheet3.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CapitalLetterWorksheet3Component
  }
]

@NgModule({
  declarations: [Std01CapitalLetterWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CapitalLetterWorksheet3Module { }
