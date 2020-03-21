import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CommonNounWorksheet5Component} from './std03-common-noun-worksheet5.component'
const routes: Routes = [
  { path: '', component:  Std03CommonNounWorksheet5Component}, 

];
@NgModule({
  declarations: [Std03CommonNounWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CommonNounWorksheet5Module { }
