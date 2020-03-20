import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03MixedVerbWorksheet5RoutingModule } from './std03-mixed-verb-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03MixedVerbWorksheet5Component } from './std03-mixed-verb-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std03MixedVerbWorksheet5Component
    }
];

@NgModule({
    declarations: [Std03MixedVerbWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03MixedVerbWorksheet5Module { }
