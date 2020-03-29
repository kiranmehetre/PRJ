import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Std01AdjectiveWorksheet1Component } from './std01-adjective-worksheet1.component'
import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassOneAuth],  component: Std01AdjectiveWorksheet1Component }
];
@NgModule({
  declarations: [Std01AdjectiveWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std01AdjectiveWorksheet1Module {

}
