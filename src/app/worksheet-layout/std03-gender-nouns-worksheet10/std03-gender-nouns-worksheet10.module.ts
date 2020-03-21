import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet10Component} from './std03-gender-nouns-worksheet10.component'
const routes: Routes = [
  { path: '', component:Std03GenderNounsWorksheet10Component  }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet10Module { }
