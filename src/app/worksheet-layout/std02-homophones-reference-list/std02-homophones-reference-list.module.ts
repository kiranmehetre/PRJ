import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HomophonesReferenceListComponent } from './std02-homophones-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02HomophonesReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02HomophonesReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HomophonesReferenceListModule { }
