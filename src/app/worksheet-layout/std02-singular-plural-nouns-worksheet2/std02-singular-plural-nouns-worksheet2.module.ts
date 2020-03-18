import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SingularPluralNounsWorksheet2Component } from './std02-singular-plural-nouns-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02SingularPluralNounsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02SingularPluralNounsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SingularPluralNounsWorksheet2Module { }
