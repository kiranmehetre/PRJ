import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet6Component } from './std01-articles-worksheet6.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ArticlesWorksheet6Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet6Module { }
