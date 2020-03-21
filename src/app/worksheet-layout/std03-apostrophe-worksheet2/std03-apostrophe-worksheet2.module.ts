import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ApostropheWorksheet2Component} from './std03-apostrophe-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03ApostropheWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03ApostropheWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ApostropheWorksheet2Module { }
