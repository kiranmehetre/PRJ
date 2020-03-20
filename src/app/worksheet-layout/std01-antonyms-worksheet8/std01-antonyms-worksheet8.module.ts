import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AntonymsWorksheet8RoutingModule } from './std01-antonyms-worksheet8-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet8Component } from './std01-antonyms-worksheet8.component';


const routes: Routes = [
  {
    path: "",
    component: Std01AntonymsWorksheet8Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AntonymsWorksheet8Module { }
