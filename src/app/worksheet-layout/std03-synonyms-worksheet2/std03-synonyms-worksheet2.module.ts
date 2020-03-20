import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet2RoutingModule } from './std03-synonyms-worksheet2-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet2Component } from './std03-synonyms-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet2Module { }
