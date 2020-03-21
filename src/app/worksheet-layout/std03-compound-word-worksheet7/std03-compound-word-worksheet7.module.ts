import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet7Component} from './std03-compound-word-worksheet7.component'
const routes: Routes = [
  { path: '', component:Std03CompoundWordWorksheet7Component  }, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet7Module { }
