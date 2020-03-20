import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03MixedVerbWorksheet3RoutingModule } from './std03-mixed-verb-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03MixedVerbWorksheet3Component } from './std03-mixed-verb-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03MixedVerbWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03MixedVerbWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03MixedVerbWorksheet3Module { }
