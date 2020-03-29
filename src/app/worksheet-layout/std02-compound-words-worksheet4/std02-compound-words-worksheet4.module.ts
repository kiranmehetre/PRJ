import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CompoundWordsWorksheet4Component } from './std02-compound-words-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CompoundWordsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02CompoundWordsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CompoundWordsWorksheet4Module { }
