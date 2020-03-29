import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet10RoutingModule } from './std03-prepositions-worksheet10-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet10Component } from './std03-prepositions-worksheet10.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrepositionsWorksheet10Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet10Module { }
