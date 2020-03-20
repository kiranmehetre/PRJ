import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet5RoutingModule } from './std01-prepositions-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet5Component } from './std01-prepositions-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PrepositionsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet5Module { }
