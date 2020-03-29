import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet3RoutingModule } from './std01-prepositions-worksheet3-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet3Component } from './std01-prepositions-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PrepositionsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet3Module { }
