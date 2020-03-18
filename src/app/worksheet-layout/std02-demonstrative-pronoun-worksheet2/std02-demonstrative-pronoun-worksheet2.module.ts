import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02DemonstrativePronounWorksheet2Component } from './std02-demonstrative-pronoun-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02DemonstrativePronounWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02DemonstrativePronounWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02DemonstrativePronounWorksheet2Module { }
