import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet7RoutingModule } from './std03-synonyms-worksheet7-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet7Component } from './std03-synonyms-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet7Module { }
