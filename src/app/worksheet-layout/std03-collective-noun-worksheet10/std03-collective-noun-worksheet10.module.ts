import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CollectiveNounWorksheet10Component} from './std03-collective-noun-worksheet10.component'
const routes: Routes = [
  { path: '', component: Std03CollectiveNounWorksheet10Component }, 

];
@NgModule({
  declarations: [Std03CollectiveNounWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CollectiveNounWorksheet10Module { }
