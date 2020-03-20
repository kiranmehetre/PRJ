import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet9RoutingModule } from './std01-synonyms-worksheet9-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet9Component } from './std01-synonyms-worksheet9.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SynonymsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsWorksheet9Module { }
