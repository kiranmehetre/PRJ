import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet3RoutingModule } from './std01-antonyms-worksheet3-routing.module';
import { Std01AntonymsWorksheet3Component } from './std01-antonyms-worksheet3.component';

const routes: Routes = [
  {
    path: "",
    component: Std01AntonymsWorksheet3Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    // Std01AntonymsWorksheet3RoutingModule
  ]
})
export class Std01AntonymsWorksheet3Module { }
