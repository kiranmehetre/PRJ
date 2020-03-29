import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CollectiveNounWorksheet10Component } from './std02-collective-noun-worksheet10.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CollectiveNounWorksheet10Component }, 

];
@NgModule({
  declarations: [Std02CollectiveNounWorksheet10Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CollectiveNounWorksheet10Module { }
