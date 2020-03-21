import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03FutureTenseWorksheet3Component} from './std03-future-tense-worksheet3.component'
const routes: Routes = [
  { path: '', component:Std03FutureTenseWorksheet3Component  }, 

];
@NgModule({
  declarations: [Std03FutureTenseWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03FutureTenseWorksheet3Module { }
