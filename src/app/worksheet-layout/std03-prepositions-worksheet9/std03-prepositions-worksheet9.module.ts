import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet9RoutingModule } from './std03-prepositions-worksheet9-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet9Component } from './std03-prepositions-worksheet9.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrepositionsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03PrepositionsWorksheet9Module { }
