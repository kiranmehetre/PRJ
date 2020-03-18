import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AntonymsWorksheet9RoutingModule } from './std01-antonyms-worksheet9-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet9Component } from './std01-antonyms-worksheet9.component';


const routes: Routes = [
  {
    path: "",
    component: Std01AntonymsWorksheet9Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AntonymsWorksheet9Module { }
