import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CompoundWordsWorksheet10RoutingModule } from './std01-compound-words-worksheet10-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CompoundWordsWorksheet10Component } from './std01-compound-words-worksheet10.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  {
     path: "",canActivate: [ClassOneAuth],
    component: Std01CompoundWordsWorksheet10Component
  }
]

@NgModule({
  declarations: [Std01CompoundWordsWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CompoundWordsWorksheet10Module { }
