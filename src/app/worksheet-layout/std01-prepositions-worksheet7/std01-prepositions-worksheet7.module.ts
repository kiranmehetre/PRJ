import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet7RoutingModule } from './std01-prepositions-worksheet7-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet7Component } from './std01-prepositions-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PrepositionsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet7Module { }
