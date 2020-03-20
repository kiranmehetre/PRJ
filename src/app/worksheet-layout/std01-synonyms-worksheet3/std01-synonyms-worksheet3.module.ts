import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet3RoutingModule } from './std01-synonyms-worksheet3-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet3Component } from './std01-synonyms-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SynonymsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01SynonymsWorksheet3Module { }
