import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet2Component} from './std03-compound-word-worksheet2.component'
const routes: Routes = [
  { path: '', component:Std03CompoundWordWorksheet2Component  }, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet2Module { }
