import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CommonNounWorksheet4Component} from './std03-common-noun-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03CommonNounWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03CommonNounWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CommonNounWorksheet4Module { }
