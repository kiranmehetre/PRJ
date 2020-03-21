import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsReferenceListComponent} from './std03-antonyms-reference-list.component'
const routes: Routes = [
  { path: '', component:Std03AntonymsReferenceListComponent  }, 

];
@NgModule({
  declarations: [Std03AntonymsReferenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsReferenceListModule { }
