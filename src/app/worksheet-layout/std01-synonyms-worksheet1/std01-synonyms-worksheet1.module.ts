import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet1RoutingModule } from './std01-synonyms-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet1Component } from './std01-synonyms-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SynonymsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsWorksheet1Module { }
