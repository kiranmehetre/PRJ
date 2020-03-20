import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet1RoutingModule } from './std03-synonyms-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet1Component } from './std03-synonyms-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet1Module { }
