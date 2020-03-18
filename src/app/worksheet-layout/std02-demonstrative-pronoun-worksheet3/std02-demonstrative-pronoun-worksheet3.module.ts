import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02DemonstrativePronounWorksheet3Component } from './std02-demonstrative-pronoun-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02DemonstrativePronounWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02DemonstrativePronounWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02DemonstrativePronounWorksheet3Module { }
