import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CapitalLetterWorksheet2Component} from './std03-capital-letter-worksheet2.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component:Std03CapitalLetterWorksheet2Component  }, 

];
@NgModule({
  declarations: [Std03CapitalLetterWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CapitalLetterWorksheet2Module { }
