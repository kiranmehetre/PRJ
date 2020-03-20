import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordsReferenceListRoutingModule } from './std01-compound-words-reference-list-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordsReferenceListComponent } from './std01-compound-words-reference-list.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CompoundWordsReferenceListComponent
  }
]

@NgModule({
  declarations: [Std01CompoundWordsReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordsReferenceListModule { }
