import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet2RoutingModule } from './std03-prepositions-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet2Component } from './std03-prepositions-worksheet2.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrepositionsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet2Module { }
