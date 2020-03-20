import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedVerbWorksheet1RoutingModule } from './std01-mixed-verb-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedVerbWorksheet1Component } from './std01-mixed-verb-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01MixedVerbWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01MixedVerbWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01MixedVerbWorksheet1Module { }
