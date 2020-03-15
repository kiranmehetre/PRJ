import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Std01AdjectiveWorksheet2Component } from './std01-adjective-worksheet2.component';
const routes: Routes = [
  { path: '', component: Std01AdjectiveWorksheet2Component }, 

];
@NgModule({
  declarations: [Std01AdjectiveWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01AdjectiveWorksheet2Module {
  constructor( ) {
    console.log("*************************************************std01/adjective/worksheet2: APUn Aa gya idhar std1 worksheet 2",);
  }
 }
