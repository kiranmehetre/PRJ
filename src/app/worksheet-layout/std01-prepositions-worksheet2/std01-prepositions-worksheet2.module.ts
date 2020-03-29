import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet2RoutingModule } from './std01-prepositions-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet2Component } from './std01-prepositions-worksheet2.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PrepositionsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet2Module { }
