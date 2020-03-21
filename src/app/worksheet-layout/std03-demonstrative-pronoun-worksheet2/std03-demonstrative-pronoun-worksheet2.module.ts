import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03DemonstrativePronounWorksheet2Component} from './std03-demonstrative-pronoun-worksheet2.component'
const routes: Routes = [
  { path: '', component:Std03DemonstrativePronounWorksheet2Component  }, 

];
@NgModule({
  declarations: [Std03DemonstrativePronounWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03DemonstrativePronounWorksheet2Module { }
