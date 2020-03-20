import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet5RoutingModule } from './std03-synonyms-worksheet5-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet5Component } from './std03-synonyms-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet5Module { }
