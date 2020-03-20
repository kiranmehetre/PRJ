import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet5RoutingModule } from './std01-synonyms-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet5Component } from './std01-synonyms-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SynonymsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsWorksheet5Module { }
