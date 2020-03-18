import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CompoundWordsWorksheet3Component } from './std02-compound-words-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CompoundWordsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02CompoundWordsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CompoundWordsWorksheet3Module { }
