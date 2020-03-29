import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet5RoutingModule } from './std03-prepositions-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet5Component } from './std03-prepositions-worksheet5.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrepositionsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet5Module { }
