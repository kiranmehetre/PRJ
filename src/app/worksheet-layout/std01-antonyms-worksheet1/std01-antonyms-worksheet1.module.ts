import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Std01AntonymsWorksheet1RoutingModule } from './std01-antonyms-worksheet1-routing.module';
import { Std01AntonymsWorksheet1Component } from './std01-antonyms-worksheet1.component';

const routes: Routes = [
  {
    path: "",
    component: Std01AntonymsWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    // Std01AntonymsWorksheet1RoutingModule
  ]
})
export class Std01AntonymsWorksheet1Module { }
