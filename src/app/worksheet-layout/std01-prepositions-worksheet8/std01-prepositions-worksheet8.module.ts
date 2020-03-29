import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet8RoutingModule } from './std01-prepositions-worksheet8-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet8Component } from './std01-prepositions-worksheet8.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PrepositionsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet8Module { }
