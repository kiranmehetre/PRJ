import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AntonymsWorksheet10Component } from './std02-antonyms-worksheet10.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsWorksheet10Component}
];
@NgModule({
  declarations: [Std02AntonymsWorksheet10Component],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class Std02AntonymsWorksheet10Module { }
