import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02RhymingWordsReferenceListComponent } from './std02-rhyming-words-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02RhymingWordsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02RhymingWordsReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02RhymingWordsReferenceListModule { }
