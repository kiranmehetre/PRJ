import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01FutureTenseWorksheet2RoutingModule } from './std01-future-tense-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01FutureTenseWorksheet2Component } from './std01-future-tense-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01FutureTenseWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01FutureTenseWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01FutureTenseWorksheet2Module { }
