import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet10RoutingModule } from './std01-synonyms-worksheet10-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet10Component } from './std01-synonyms-worksheet10.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SynonymsWorksheet10Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsWorksheet10Module { }
