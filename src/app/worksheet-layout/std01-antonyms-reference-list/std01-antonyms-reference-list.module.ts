import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01AntonymsReferenceListRoutingModule } from './std01-antonyms-reference-list-routing.module';
import { RouterModule, Routes } from '@angular/router';
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
    RouterModule.forChild(routes)
  ]
})
export class Std01AntonymsReferenceListModule { 
  constructor() {
    //console.log("Std01AntonymsReferenceListModule");
  }
}
