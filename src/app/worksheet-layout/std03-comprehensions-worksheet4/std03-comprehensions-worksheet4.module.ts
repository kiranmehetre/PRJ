import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ComprehensionsWorksheet4Component} from './std03-comprehensions-worksheet4.component'
const routes: Routes = [
  { path: '', component:Std03ComprehensionsWorksheet4Component  }, 

];
@NgModule({
  declarations: [Std03ComprehensionsWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ComprehensionsWorksheet4Module { }
