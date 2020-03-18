import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02GenderNounsReferenceListComponent } from './std02-gender-nouns-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02GenderNounsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02GenderNounsReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02GenderNounsReferenceListModule { }
