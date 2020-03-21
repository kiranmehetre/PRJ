import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CommaWorksheet2Component} from './std03-comma-worksheet2.component'
const routes: Routes = [
  { path: '', component:Std03CommaWorksheet2Component  }, 

];
@NgModule({
  declarations: [Std03CommaWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CommaWorksheet2Module { }
