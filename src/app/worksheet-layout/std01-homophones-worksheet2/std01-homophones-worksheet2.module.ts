import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesWorksheet2RoutingModule } from './std01-homophones-worksheet2-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesWorksheet2Component } from './std01-homophones-worksheet2.component';

const routes: Routes = [
  {
      path: "",
      component: Std01HomophonesWorksheet2Component
  }
];

@NgModule({
  declarations: [Std01HomophonesWorksheet2Component],
  imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01HomophonesWorksheet2Module { }
