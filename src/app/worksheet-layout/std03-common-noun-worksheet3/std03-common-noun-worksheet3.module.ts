import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CommonNounWorksheet3Component} from './std03-common-noun-worksheet3.component'
const routes: Routes = [
  { path: '', component:Std03CommonNounWorksheet3Component  }, 

];
@NgModule({
  declarations: [Std03CommonNounWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CommonNounWorksheet3Module { }
