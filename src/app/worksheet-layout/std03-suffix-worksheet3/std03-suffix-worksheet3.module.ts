import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SuffixWorksheet3RoutingModule } from './std03-suffix-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SuffixWorksheet3Component } from './std03-suffix-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SuffixWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03SuffixWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SuffixWorksheet3Module { }
