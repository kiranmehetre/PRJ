import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ArticlesWorksheet1RoutingModule } from './std01-articles-worksheet1-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01ArticlesWorksheet1Component } from './std01-articles-worksheet1.component';


const routes: Routes = [
  {
    path: "",
    component: Std01ArticlesWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01ArticlesWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01ArticlesWorksheet1Module { }
