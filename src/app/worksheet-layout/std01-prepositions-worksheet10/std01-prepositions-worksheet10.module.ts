import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet10RoutingModule } from './std01-prepositions-worksheet10-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet10Component } from './std01-prepositions-worksheet10.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PrepositionsWorksheet10Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet10Module { }
