import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet4Component } from './std01-articles-worksheet4.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ArticlesWorksheet4Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet4Module { }
