import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03MixedVerbWorksheet4RoutingModule } from './std03-mixed-verb-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03MixedVerbWorksheet4Component } from './std03-mixed-verb-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03MixedVerbWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03MixedVerbWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03MixedVerbWorksheet4Module { }
