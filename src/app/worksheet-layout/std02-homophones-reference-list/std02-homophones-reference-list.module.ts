import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HomophonesReferenceListComponent } from './std02-homophones-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02HomophonesReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02HomophonesReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HomophonesReferenceListModule { }
