import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CapitalLetterWorksheet1RoutingModule } from './std01-capital-letter-worksheet1-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01CapitalLetterWorksheet1Component } from './std01-capital-letter-worksheet1.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CapitalLetterWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01CapitalLetterWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CapitalLetterWorksheet1Module { }
