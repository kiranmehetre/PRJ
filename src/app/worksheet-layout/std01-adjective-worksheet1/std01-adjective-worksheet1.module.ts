import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {Std01AdjectiveWorksheet1Component} from './std01-adjective-worksheet1.component'
// import { Std01AdjectiveWorksheet1RoutingModule } from './std01-adjective-worksheet1-routing.module';
const routes: Routes = [
  { path: '', component: Std01AdjectiveWorksheet1Component }, 

];
@NgModule({
  declarations: [Std01AdjectiveWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std01AdjectiveWorksheet1Module { 
  constructor() {
    console.log("ismodule")
    
  }
}
