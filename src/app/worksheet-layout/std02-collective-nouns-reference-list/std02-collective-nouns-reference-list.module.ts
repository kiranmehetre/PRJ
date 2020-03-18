import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CollectiveNounsReferenceListComponent } from './std02-collective-nouns-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CollectiveNounsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02CollectiveNounsReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CollectiveNounsReferenceListModule { }
