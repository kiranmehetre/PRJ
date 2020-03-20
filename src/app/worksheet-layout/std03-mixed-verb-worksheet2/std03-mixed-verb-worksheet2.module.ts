import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03MixedVerbWorksheet2RoutingModule } from './std03-mixed-verb-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03MixedVerbWorksheet2Component } from './std03-mixed-verb-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03MixedVerbWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03MixedVerbWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03MixedVerbWorksheet2Module { }
