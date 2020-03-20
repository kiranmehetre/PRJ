import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet4RoutingModule } from './std03-synonyms-worksheet4-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet4Component } from './std03-synonyms-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet4Module { }
