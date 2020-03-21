import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HomophonesReferenceListComponent} from './std03-homophones-reference-list.component'
const routes: Routes = [
  { path: '', component:  Std03HomophonesReferenceListComponent}, 

];
@NgModule({
  declarations: [Std03HomophonesReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HomophonesReferenceListModule { }
