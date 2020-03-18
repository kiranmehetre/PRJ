import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AntonymsWorksheet6Component  } from './std02-antonyms-worksheet6.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AntonymsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std02AntonymsWorksheet6Component],
  imports: [
    CommonModule ,RouterModule.forChild(routes) 
  ]
})
export class Std02AntonymsWorksheet6Module { }
