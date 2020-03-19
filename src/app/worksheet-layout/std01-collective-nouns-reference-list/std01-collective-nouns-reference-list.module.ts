import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CollectiveNounsReferenceListRoutingModule } from './std01-collective-nouns-reference-list-routing.module';
import { Std01CollectiveNounsReferenceListComponent } from './std01-collective-nouns-reference-list.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: Std01CollectiveNounsReferenceListComponent
  }
]

@NgModule({
  declarations: [Std01CollectiveNounsReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CollectiveNounsReferenceListModule { }
