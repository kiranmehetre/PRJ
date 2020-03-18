import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AntonymsReferenceListComponent } from './std02-antonyms-reference-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsReferenceListComponent }, 

];
@NgModule({
  declarations: [Std02AntonymsReferenceListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AntonymsReferenceListModule { }
