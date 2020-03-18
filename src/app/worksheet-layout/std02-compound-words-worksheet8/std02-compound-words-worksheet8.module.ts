import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CompoundWordsWorksheet8Component } from './std02-compound-words-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CompoundWordsWorksheet8Component }, 

];
@NgModule({
  declarations: [Std02CompoundWordsWorksheet8Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CompoundWordsWorksheet8Module { }
