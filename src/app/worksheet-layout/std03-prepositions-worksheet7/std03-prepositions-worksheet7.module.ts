import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet7RoutingModule } from './std03-prepositions-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet7Component } from './std03-prepositions-worksheet7.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrepositionsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet7Module { }
