import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PastTenseWorksheet1RoutingModule } from './std01-past-tense-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PastTenseWorksheet1Component } from './std01-past-tense-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PastTenseWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01PastTenseWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PastTenseWorksheet1Module { }
