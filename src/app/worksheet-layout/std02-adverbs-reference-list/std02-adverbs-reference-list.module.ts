import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdverbsReferenceListComponent } from './std02-adverbs-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02AdverbsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02AdverbsReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdverbsReferenceListModule { }
