import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CommonNounWorksheet3Component} from './std03-common-noun-worksheet3.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component:Std03CommonNounWorksheet3Component  }, 

];
@NgModule({
  declarations: [Std03CommonNounWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CommonNounWorksheet3Module { }
