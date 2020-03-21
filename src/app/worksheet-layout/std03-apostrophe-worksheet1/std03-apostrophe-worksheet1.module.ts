import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ApostropheWorksheet1Component} from './std03-apostrophe-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03ApostropheWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03ApostropheWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ApostropheWorksheet1Module { }
