import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet6RoutingModule } from './std03-synonyms-worksheet6-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet6Component } from './std03-synonyms-worksheet6.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet6Module { }
