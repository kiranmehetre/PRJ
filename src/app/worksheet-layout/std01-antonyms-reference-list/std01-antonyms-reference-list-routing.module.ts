import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Std01AntonymsReferenceListComponent } from './std01-antonyms-reference-list.component';

const routes: Routes = [
  {
    path: "",
    component: Std01AntonymsReferenceListComponent
  }
]

@NgModule({
  declarations: [Std01AntonymsReferenceListComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ],
  // exports: [RouterModule]
})
export class Std01AntonymsReferenceListRoutingModule { }
