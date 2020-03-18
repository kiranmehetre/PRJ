import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SynonymsReferenceListComponent } from './std02-synonyms-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02SynonymsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02SynonymsReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SynonymsReferenceListModule { }
