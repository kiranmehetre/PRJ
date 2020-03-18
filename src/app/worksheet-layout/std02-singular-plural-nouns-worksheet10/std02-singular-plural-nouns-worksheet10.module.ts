import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SingularPluralNounsWorksheet10Component } from './std02-singular-plural-nouns-worksheet10.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02SingularPluralNounsWorksheet10Component }, 

];
@NgModule({
  declarations: [Std02SingularPluralNounsWorksheet10Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SingularPluralNounsWorksheet10Module { }
