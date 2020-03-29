import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {Std01ActionVerbWorksheet1Component} from './std01-action-verb-worksheet1.component'
// import { Std01ActionVerbWorksheet1RoutingModule } from './std01-action-verb-worksheet1-routing.module';
import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
  { path: '', component: Std01ActionVerbWorksheet1Component }, 

];
@NgModule({
  declarations: [Std01ActionVerbWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Std01ActionVerbWorksheet1RoutingModule
  ]
})
export class Std01ActionVerbWorksheet1Module { }


