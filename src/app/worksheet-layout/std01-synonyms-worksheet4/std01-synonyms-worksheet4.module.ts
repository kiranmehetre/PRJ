import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet4RoutingModule } from './std01-synonyms-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet4Component } from './std01-synonyms-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SynonymsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01SynonymsWorksheet4Module { }
