import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PastTenseWorksheet3RoutingModule } from './std01-past-tense-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PastTenseWorksheet3Component } from './std01-past-tense-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PastTenseWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01PastTenseWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PastTenseWorksheet3Module { }
