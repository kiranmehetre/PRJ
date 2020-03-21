import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03FutureTenseWorksheet2Component} from './std03-future-tense-worksheet2.component'
const routes: Routes = [
  { path: '', component:Std03FutureTenseWorksheet2Component  }, 

];
@NgModule({
  declarations: [Std03FutureTenseWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03FutureTenseWorksheet2Module { }
