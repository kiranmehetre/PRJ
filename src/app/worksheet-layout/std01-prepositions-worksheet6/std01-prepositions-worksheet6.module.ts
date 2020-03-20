import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet6RoutingModule } from './std01-prepositions-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet6Component } from './std01-prepositions-worksheet6.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PrepositionsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet6Module { }
