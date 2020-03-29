import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet8RoutingModule } from './std03-prepositions-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet8Component } from './std03-prepositions-worksheet8.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrepositionsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet8Module { }
