import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordsReferenceListRoutingModule } from './std01-compound-words-reference-list-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordsReferenceListComponent } from './std01-compound-words-reference-list.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
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
