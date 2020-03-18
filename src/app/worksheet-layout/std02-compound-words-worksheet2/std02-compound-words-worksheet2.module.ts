import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CompoundWordsWorksheet2Component } from './std02-compound-words-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CompoundWordsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02CompoundWordsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CompoundWordsWorksheet2Module { }
