import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet7RoutingModule } from './std01-synonyms-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet7Component } from './std01-synonyms-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SynonymsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsWorksheet7Module { }
