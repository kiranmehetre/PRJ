import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SuffixWorksheet4RoutingModule } from './std03-suffix-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SuffixWorksheet4Component } from './std03-suffix-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SuffixWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03SuffixWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03SuffixWorksheet4Module { }
