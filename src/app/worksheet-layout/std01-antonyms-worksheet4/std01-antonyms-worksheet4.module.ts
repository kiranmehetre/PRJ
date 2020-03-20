import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet4RoutingModule } from './std01-antonyms-worksheet4-routing.module';
import { Std01AntonymsWorksheet4Component } from './std01-antonyms-worksheet4.component';

const routes: Routes = [
  {
    path: "",
    component: Std01AntonymsWorksheet4Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    // Std01AntonymsWorksheet3RoutingModule
  ]
})
export class Std01AntonymsWorksheet4Module { }
