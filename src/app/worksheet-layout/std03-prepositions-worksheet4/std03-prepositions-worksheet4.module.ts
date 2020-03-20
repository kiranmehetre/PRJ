import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet4RoutingModule } from './std03-prepositions-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet4Component } from './std03-prepositions-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PrepositionsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet4Module { }
