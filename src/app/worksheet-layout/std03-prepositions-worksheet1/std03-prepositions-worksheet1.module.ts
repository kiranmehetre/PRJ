import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet1RoutingModule } from './std03-prepositions-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet1Component } from './std03-prepositions-worksheet1.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrepositionsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet1Module { }
