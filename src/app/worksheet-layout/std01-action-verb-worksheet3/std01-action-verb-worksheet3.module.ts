import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {Std01ActionVerbWorksheet3Component} from './std01-action-verb-worksheet3.component'
// import { Std01AdjectiveWorksheet1RoutingModule } from './std01-adjective-worksheet1-routing.module';
import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassOneAuth], component: Std01ActionVerbWorksheet3Component }, 

];
@NgModule({
  declarations: [Std01ActionVerbWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std01ActionVerbWorksheet3Module { }
