import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {Std01ActionVerbWorksheet4Component} from './std01-action-verb-worksheet4.component'
// import { Std01AdjectiveWorksheet1RoutingModule } from './std01-adjective-worksheet1-routing.module';
const routes: Routes = [
  { path: '', component: Std01ActionVerbWorksheet4Component }, 

];
@NgModule({
  declarations: [Std01ActionVerbWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std01ActionVerbWorksheet4Module { }
