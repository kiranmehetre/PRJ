import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03FutureTenseWorksheet1Component} from './std03-future-tense-worksheet1.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component:Std03FutureTenseWorksheet1Component  }, 

];
@NgModule({
  declarations: [Std03FutureTenseWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03FutureTenseWorksheet1Module { }
