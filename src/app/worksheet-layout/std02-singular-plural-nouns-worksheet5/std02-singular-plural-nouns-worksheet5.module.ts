import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SingularPluralNounsWorksheet5Component } from './std02-singular-plural-nouns-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02SingularPluralNounsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02SingularPluralNounsWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SingularPluralNounsWorksheet5Module { }
