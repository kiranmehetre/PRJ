import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ApostropheWorksheet3Component } from './std02-apostrophe-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ApostropheWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02ApostropheWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ApostropheWorksheet3Module { }
