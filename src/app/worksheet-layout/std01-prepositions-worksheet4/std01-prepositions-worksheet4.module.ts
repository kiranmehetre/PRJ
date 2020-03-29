import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet4RoutingModule } from './std01-prepositions-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet4Component } from './std01-prepositions-worksheet4.component';
import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    {
        path: "",canActivate: [ClassOneAuth],
        component: Std01PrepositionsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet4Module { }
