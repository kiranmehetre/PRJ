import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AntonymsWorksheet10RoutingModule } from './std01-antonyms-worksheet10-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Std01AntonymsWorksheet10Component } from './std01-antonyms-worksheet10.component';


const routes: Routes = [
  {
    path: "",
    component: Std01AntonymsWorksheet10Component
  }
]

@NgModule({
  declarations: [Std01AntonymsWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AntonymsWorksheet10Module { }
