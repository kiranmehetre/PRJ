import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet6RoutingModule } from './std03-prepositions-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet6Component } from './std03-prepositions-worksheet6.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrepositionsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet6Module { }
