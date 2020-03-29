import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SynonymsReferenceListComponent } from './std02-synonyms-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02SynonymsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02SynonymsReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SynonymsReferenceListModule { }
