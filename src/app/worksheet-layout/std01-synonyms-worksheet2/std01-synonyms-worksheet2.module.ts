import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet2RoutingModule } from './std01-synonyms-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet2Component } from './std01-synonyms-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SynonymsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsWorksheet2Module { }
