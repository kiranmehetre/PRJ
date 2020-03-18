import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02DemonstrativePronounWorksheet5Component } from './std02-demonstrative-pronoun-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02DemonstrativePronounWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02DemonstrativePronounWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02DemonstrativePronounWorksheet5Module { }
