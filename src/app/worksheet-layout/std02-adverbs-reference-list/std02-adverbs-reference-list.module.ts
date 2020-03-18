import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdverbsReferenceListComponent } from './std02-adverbs-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AdverbsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02AdverbsReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdverbsReferenceListModule { }
