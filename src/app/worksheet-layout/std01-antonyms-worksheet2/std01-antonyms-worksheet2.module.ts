import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet2RoutingModule } from './std01-antonyms-worksheet2-routing.module';
import { Std01AntonymsWorksheet2Component } from './std01-antonyms-worksheet2.component';

const routes: Routes = [
  {
    path: "",
    component: Std01AntonymsWorksheet2Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    // Std01AntonymsWorksheet2RoutingModule
  ]
})
export class Std01AntonymsWorksheet2Module { }
