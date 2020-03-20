import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03MixedVerbWorksheet1RoutingModule } from './std03-mixed-verb-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03MixedVerbWorksheet1Component } from './std03-mixed-verb-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03MixedVerbWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03MixedVerbWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03MixedVerbWorksheet1Module { }
