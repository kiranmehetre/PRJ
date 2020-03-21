import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CommaWorksheet1Component} from './std03-comma-worksheet1.component'
const routes: Routes = [
  { path: '', component:Std03CommaWorksheet1Component  }, 

];
@NgModule({
  declarations: [Std03CommaWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CommaWorksheet1Module { }
