import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet10Component} from './std03-antonyms-worksheet10.component'
const routes: Routes = [
  { path: '', component:Std03AntonymsWorksheet10Component  }, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet10Module { }
