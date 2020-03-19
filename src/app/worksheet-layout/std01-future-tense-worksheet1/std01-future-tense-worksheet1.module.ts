import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01FutureTenseWorksheet1RoutingModule } from './std01-future-tense-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01FutureTenseWorksheet1Component } from './std01-future-tense-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01FutureTenseWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01FutureTenseWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01FutureTenseWorksheet1Module { }
