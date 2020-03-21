import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HomophonesWorksheet5Component} from './std03-homophones-worksheet5.component'
const routes: Routes = [
  { path: '', component:Std03HomophonesWorksheet5Component  }, 

];
@NgModule({
  declarations: [Std03HomophonesWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HomophonesWorksheet5Module { }
