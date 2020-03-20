import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet9RoutingModule } from './std03-synonyms-worksheet9-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet9Component } from './std03-synonyms-worksheet9.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03SynonymsWorksheet9Module { }
