import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet7Component } from './std01-articles-worksheet7.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ArticlesWorksheet7Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet7Module { }
